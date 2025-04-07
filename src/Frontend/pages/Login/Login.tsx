import { useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginBanner from "../../../assets/Login.png";
import LoginBoyBanner from "../../../assets/LoginBoy.png";
import Planes from "../../../assets/planes.png";
import "./Login.css";

const initialState = { email: "", password: "", confirmPassword: "" };

type Action = { type: "SET_FIELD"; field: string; value: string };

const reducer = (state: typeof initialState, action: Action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "SET_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: state.email,
            password: state.password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("access_token", data.access_token);
        navigate("/panel");
      } else {
        alert(data.error || "Error al iniciar sesión");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al conectar con el servidor");
    }
  };

  return (
    <div className="login flex items-center justify-center min-h-screen relative group px-4">
      <img
        src={LoginBanner}
        alt=""
        className="bannerLogin absolute sm:block w-full h-auto sm:h-[660px] object-cover
        sm:rotate-0 sm:w-auto sm:max-h-screen"
      />
      <img
        src={Planes}
        alt=""
        className="planes absolute transition-transform duration-300 group-hover:-translate-y-2 hidden sm:block"
      />
      <img
        src={LoginBoyBanner}
        alt=""
        className="LoginBoyBanner absolute hidden md:block"
      />
      <div
        className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-md backdrop-blur-md bg-opacity-90
      transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-lg"
      >
        <h2 className="mb-4 text-center text-2xl font-semibold">
          Inicio de sesión
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              value={state.password}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border px-3 py-2"
              required
            />
          </div>
          <p className="mt-4 text-center text-sm text-gray-600">
            ¿No tienes una cuenta?
            <Link to="/register" className="text-blue-600 hover:underline">
              {" "}
              Regístrate aquí
            </Link>
          </p>
          <button type="submit" className="btn__primary btn__lime w-full">
            Inicia sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
