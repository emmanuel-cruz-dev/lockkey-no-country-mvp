from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
from flask_jwt_extended import JWTManager

# Cargar variables de entorno
load_dotenv()


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  


app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET_KEY")  
jwt = JWTManager(app)  

from models import db
db.init_app(app)

from routes import routes_blueprint
app.register_blueprint(routes_blueprint)

@app.route("/")
def home():
    return jsonify({"mensaje": "Backend con Flask y PostgreSQL funcionando"})

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)