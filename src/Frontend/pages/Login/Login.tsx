import { Link } from "react-router-dom";
import LoginBanner from "../../../assets/Login.png";
import LoginBoyBanner from "../../../assets/LoginBoy.png";
import Planes from "../../../assets/planes.png";
import "./Login.css";
import { useDarkMode } from "../../hooks/useDarkMode";
import useLogin from "../../hooks/useLogin";

function Login() {
  const { isDarkMode } = useDarkMode();
  const { state, handleChange, handleSubmit } = useLogin();

  return (
    <section className="login flex items-center justify-center h-full min-h-screen relative -mt-8 pt-8 group px-4">
      <figure className="absolute top-0 left-0 h-full w-full z-[-1]">
        <img
          src={LoginBanner}
          alt=""
          className={`bannerLogin w-full h-full object-cover ${
            isDarkMode ? "opacity-20" : ""
          }`}
        />
      </figure>
      <img
        src={Planes}
        alt=""
        className="planes absolute transition-transform duration-300 group-hover:-translate-y-2 hidden sm:block"
      />
      <img
        src={LoginBoyBanner}
        alt=""
        className={`LoginBoyBanner absolute hidden md:block ${
          isDarkMode ? "opacity-70" : ""
        }`}
      />
      <div
        className={`relative w-full max-w-md rounded-lg ${
          isDarkMode ? "dark-mode__background-color" : "bg-white"
        } p-6 shadow-md backdrop-blur-md bg-opacity-90
      transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-lg`}
      >
        <h2 className="mb-4 text-center text-2xl font-semibold">
          Inicio de sesión
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-black">
          <div>
            <label
              className={`block text-sm font-medium ${
                isDarkMode ? "text-white/80" : "text-gray-700"
              }`}
            >
              Email*
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
            <label
              className={`block text-sm font-medium ${
                isDarkMode ? "text-white/80" : "text-gray-700"
              }`}
            >
              Contraseña*
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
          <p
            className={`mt-4 text-center text-sm ${
              isDarkMode ? "text-white/80" : "text-gray-600"
            }`}
          >
            ¿No tienes una cuenta?
            <Link
              to="/register"
              className={`text-blue-600 ${
                isDarkMode ? "text-blue-400" : ""
              } hover:underline`}
            >
              {" "}
              Regístrate aquí
            </Link>
          </p>
          <button
            type="submit"
            className="btn__primary btn__lime w-full text-black"
          >
            Inicia sesión
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;
