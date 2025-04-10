import LoginBanner from "../../../assets/Login.png";
import LaptopRegister from "../../../assets/LaptopRegister.png";
import CircleRegister from "../../../assets/CircleRegister.png";
import "./Register.css";
import { useDarkMode } from "../../hooks/useDarkMode";
import RegisterForm from "./RegisterForm";

function Register() {
  const { isDarkMode } = useDarkMode();

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

        <RegisterForm />
      </article>
    </section>
  );
}

export default Register;
