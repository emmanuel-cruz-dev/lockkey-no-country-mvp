from flask import Blueprint, request, jsonify
from zxcvbn import zxcvbn
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import check_password_hash
from models import Password, User, db
import re
from urllib.parse import urlparse

routes_blueprint = Blueprint("routes", __name__)

TRANSLATIONS = {
    "Add another word or two. Uncommon words are better.": "Añade una o dos palabras más. Las palabras poco comunes son mejores.",
    "Avoid dates and years that are associated with you.": "Evita fechas y años asociados contigo.",
    "Capitalization doesn't help very much.": "Las mayúsculas no ayudan mucho.",
    "Common names and surnames are easy to guess.": "Los nombres y apellidos comunes son fáciles de adivinar.",
    "Predictable substitutions like '@' instead of 'a' don't help very much.": "Sustituciones predecibles como '@' en lugar de 'a' no ayudan mucho.",
    "Use a few words, avoid common phrases.": "Usa algunas palabras, evita frases comunes.",
    "No need for symbols, digits, or uppercase letters.": "Es necesario usar símbolos, dígitos o letras mayúsculas.",
    "Avoid repeated words and characters.": "Evite palabras y caracteres repetidos."
}


def is_valid_email(email):
    email_regex = r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
    return re.match(email_regex, email) is not None


def get_time_to_crack(guesses_log10):
    time_estimates = [
        "Instantáneo", "Menos de un segundo", "Segundos", "Minutos",
        "Horas", "Días", "Meses", "Años", "Siglos"
    ]
    return time_estimates[min(int(guesses_log10), len(time_estimates) - 1)]


def to_string(value):
    """Convierte cualquier valor a string."""
    return str(value) if value is not None else ""


def is_valid_url(url):
    """Valida si una cadena es una URL válida."""
    if not isinstance(url, str):
        return False
        
    if not url.strip():
        return True  # Consideramos cadenas vacías como válidas
        
    try:
        result = urlparse(url)
        return bool(result.scheme and result.netloc)  # Asegura que tenga esquema y dominio
    except Exception as e:
        print(f"Error validando URL: {str(e)}")
        return False

@routes_blueprint.route("/validate-password", methods=["POST"])
def validate_password():
    data = request.get_json()
    password = data.get("password", "")

    result = zxcvbn(password)

    score = result["score"]
    suggestions = [TRANSLATIONS.get(s, s)
                   for s in result["feedback"]["suggestions"]]
    time_to_crack = get_time_to_crack(result.get("guesses_log10", 0))

    return jsonify({
        "score": score,
        "suggestions": suggestions,
        "time_to_crack": time_to_crack
    })


@routes_blueprint.route("/register", methods=["POST"])
def register():
    try:
        data = request.get_json()
        if not data:
            return jsonify({"error": "No se recibieron datos JSON"}), 400

        email = data.get("email", "")
        password = data.get("password", "")
        confirm_password = data.get("confirmPassword", "")

        # Validaciones básicas
        if not email or not password:
            return jsonify({"error": "Correo y contraseña son obligatorios"}), 400

        if password != confirm_password:
            return jsonify({"error": "Las contraseñas no coinciden"}), 400

        if not is_valid_email(email):
            return jsonify({"error": "Correo electrónico no válido"}), 400

        # Verificar contraseña
        result = zxcvbn(password)
        score = result["score"]
        suggestions = [TRANSLATIONS.get(s, s)
                       for s in result["feedback"]["suggestions"]]
        time_to_crack = get_time_to_crack(result.get("guesses_log10", 0))

        if score < 3:
            return jsonify({
                "error": "La contraseña es demasiado débil",
                "score": score,
                "suggestions": suggestions,
                "time_to_crack": time_to_crack
            }), 400

        # Verificar si el usuario ya existe
        existing_user = User.query.filter_by(email=email).first()
        if existing_user:
            return jsonify({"error": "El correo ya está registrado"}), 400

        # Crear nuevo usuario
        new_user = User(email, password)
        db.session.add(new_user)
        db.session.commit()

        return jsonify({
            "message": "Registro exitoso",
            "score": score,
            "suggestions": suggestions,
            "time_to_crack": time_to_crack
        }), 201

    except Exception as e:
        # Log detallado del error
        print(f"Error en registro: {str(e)}")
        return jsonify({"error": f"Error interno del servidor: {str(e)}"}), 500


@routes_blueprint.route("/login", methods=["POST"])
def login():
    try:
        data = request.get_json()
        if not data:
            return jsonify({"error": "No se recibieron datos JSON"}), 400

        email = data.get("email", "")
        password = data.get("password", "")

        if not email or not password:
            return jsonify({"error": "Correo y contraseña son obligatorios"}), 400

        user = User.query.filter_by(email=email).first()

        if not user or not user.check_password(password):
            return jsonify({"error": "Correo o contraseña incorrectos"}), 401

        # Crear un token JWT
        access_token = create_access_token(identity=user.id)
        return jsonify({"access_token": access_token}), 200

    except Exception as e:
        print(f"Error en login: {str(e)}")
        return jsonify({"error": "Error interno del servidor"}), 500


@routes_blueprint.route("/passwords", methods=["POST"])
@jwt_required()
def save_password():
    try:
        print("Headers:", dict(request.headers))
        print("Request method:", request.method)
        print("Request data:", request.data)
        
        data = request.get_json(force=True)
        print("Data después de get_json:", data)
        
        user_id = get_jwt_identity()
        
        password_data = {
            "user_id": user_id,
            "url": str(data.get("url", "")),
            "name": str(data.get("name", "")),
            "folder": str(data.get("folder", "")),
            "username": str(data.get("username", "")),
            "password": str(data.get("password", "")),
            "notes": str(data.get("notes", ""))
        }
        
        print("Password data:", password_data)
        
        new_password = Password(
            user_id=user_id,
            url=password_data["url"],
            name=password_data["name"],
            folder=password_data["folder"],
            username=password_data["username"],
            password=password_data["password"],
            notes=password_data["notes"]
        )
        
        db.session.add(new_password)
        db.session.commit()
        
        return jsonify({
            "message": "Contraseña guardada exitosamente",
            "password": {
                "id": new_password.id,
                "url": new_password.url,
                "name": new_password.name,
                "folder": new_password.folder,
                "username": new_password.username,
                "password": new_password.password,
                "notes": new_password.notes,
                "created_at": new_password.created_at.isoformat() if new_password.created_at else None
            }
        }), 201
        
    except Exception as e:
        import traceback
        print("Error detallado:", str(e))
        print(traceback.format_exc())
        
        return jsonify({"error": f"Error interno del servidor: {str(e)}"}), 500
@routes_blueprint.route("/passwords", methods=["GET"])
@jwt_required()
def get_passwords():
    try:
        user_id = get_jwt_identity()

        passwords = Password.query.filter_by(user_id=user_id).all()

        passwords_data = [password.serialize() for password in passwords]

        return jsonify({"passwords": passwords_data}), 200

    except Exception as e:
        print(f"Error al obtener las contraseñas: {str(e)}")
        return jsonify({"error": "Error interno del servidor"}), 500