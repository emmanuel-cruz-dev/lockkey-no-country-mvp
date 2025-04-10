import { useReducer, useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import LoginBanner from "../../../assets/Login.png";
import LaptopRegister from "../../../assets/LaptopRegister.png";
import CircleRegister from "../../../assets/CircleRegister.png";
import "./Register.css";
import { useDarkMode } from "../../hooks/useDarkMode";
import {
  Action,
  Field,
  initialState,
  InitialStateType,
} from "../../Store/types";

const reducer = (state: InitialStateType, action: Action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

const isValidEmail = (email: string) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

const Register = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [passwordScore, setPasswordScore] = useState(0);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [emailError, setEmailError] = useState("");
  const [timeToCrack, setTimeToCrack] = useState("");
  const [apiError, setApiError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { isDarkMode } = useDarkMode();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (!state.password) {
      setPasswordScore(0);
      setSuggestions([]);
      setTimeToCrack("");
      return;
    }

    const timeout = setTimeout(async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_BACKEND_URL + "/validate-password",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ password: state.password }),
          }
        );

        const data = await response.json();
        console.log("Respuesta del backend:", data);

        if (response.ok) {
          setPasswordScore(data.score || 0);
          setSuggestions(data.suggestions || []);
          setTimeToCrack(data.time_to_crack || "");
          setApiError("");
        } else {
          setApiError(data.error || "Error en la validación de la contraseña.");
        }
      } catch (error) {
        console.error("Error de conexión:", error);
        setApiError("Error al conectar con el servidor.");
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [state.password]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name as Field, value });

    if (name === "email") {
      setEmailError(isValidEmail(value) ? "" : "Correo electrónico no válido");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(state.email)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    if (state.password !== state.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    if (passwordScore < 3) {
      alert("La contraseña es demasiado débil. Usa una más segura.");
      return;
    }

    try {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(state),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Registro exitoso");
        window.location.href = "/login";
      } else {
        setApiError(data.error || "Error en el registro");
      }
    } catch (error) {
      console.error("Error de conexión:", error);
      setApiError("Error al conectar con el servidor.");
    }
  };

  const strengthColor = useMemo(() => {
    const colors = [
      "bg-red-500",
      "bg-orange-400",
      "bg-yellow-400",
      "bg-green-400",
      "bg-green-600",
    ];
    return colors[Math.min(Math.max(passwordScore, 0), colors.length - 1)]; // 🔹 Asegura que esté dentro del rango
  }, [passwordScore]);

  return (
    <section className="register flex items-center justify-center min-h-[37rem] -mt-8 relative">
      <img
        src={LoginBanner}
        alt="Fondo de login"
        className={`bannerLogin absolute ${isDarkMode ? "opacity-20" : ""}`}
      />
      <img
        src={LaptopRegister}
        alt="Laptop Register"
        className={`absolute laptopRegister ${isDarkMode ? "opacity-60" : ""}`}
      />
      <img
        src={CircleRegister}
        alt="Circle Register"
        className={`absolute circleRegister ${isDarkMode ? "opacity-60" : ""}`}
      />
      <article
        className={`relative ${
          isDarkMode ? "dark-mode__background-color" : "bg-white"
        } w-full max-w-md rounded-lg p-6 shadow-md backdrop-blur-md bg-opacity-90 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg`}
      >
        <h2 className="mb-4 text-center text-2xl font-semibold">Registro</h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-black">
          <div>
            <label
              className={`block text-sm font-medium ${
                isDarkMode ? "text-white/80" : "text-gray-700"
              }`}
            >
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border px-3 py-2"
              required
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
          </div>
          <div>
            <label
              className={`block text-sm font-medium ${
                isDarkMode ? "text-white/80" : "text-gray-700"
              }`}
            >
              Contraseña Maestra
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={state.password}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border px-3 py-2"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500 hover:text-gray-700 text-sm"
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="w-full h-2 mt-2 rounded bg-gray-300">
            <div
              className={`h-2 ${strengthColor} rounded`}
              style={{ width: `${(passwordScore + 1) * 20}%` }}
            ></div>
          </div>
          {timeToCrack && (
            <p
              className={`${
                isDarkMode ? "text-white/60" : "text-gray-600"
              } text-sm mt-1`}
            >
              ⏳ Tiempo estimado para descifrar: <strong>{timeToCrack}</strong>
            </p>
          )}
          {suggestions.length > 0 && (
            <ul
              className={`mt-2 text-sm ${
                isDarkMode ? "text-white/60" : "text-gray-600"
              }`}
            >
              {suggestions.map((s, i) => (
                <li key={i}>• {s}</li>
              ))}
            </ul>
          )}
          {apiError && <p className="text-red-500 text-sm mt-1">{apiError}</p>}

          <div>
            <label
              className={`block text-sm font-medium ${
                isDarkMode ? "text-white/80" : "text-gray-700"
              }`}
            >
              Confirmar contraseña Maestra
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={state.confirmPassword}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border px-3 py-2"
              required
            />
          </div>
          <p
            className={`mt-4 text-center text-sm ${
              isDarkMode ? "text-white/60" : "text-gray-600"
            }`}
          >
            ¿Ya tienes una cuenta?
            <Link
              to="/login"
              className={`${
                isDarkMode ? "text-blue-400" : "text-blue-600"
              } hover:underline`}
            >
              {" "}
              Inicia sesión aquí
            </Link>
          </p>
          <button
            type="submit"
            className="btn__primary btn__lime w-full text-black cursor-pointer"
            disabled={!state.password || passwordScore < 3}
          >
            Regístrate
          </button>
          {passwordScore < 3 && (
            <p className="text-red-500 text-sm mt-1">
              La contraseña es demasiado débil. Usa una más segura.
            </p>
          )}
        </form>
      </article>
    </section>
  );
};

export default Register;
