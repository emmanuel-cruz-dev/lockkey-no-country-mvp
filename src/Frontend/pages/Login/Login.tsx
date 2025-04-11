import LoginBanner from "../../../assets/Login.png";
import LoginBoyBanner from "../../../assets/LoginBoy.png";
import Planes from "../../../assets/planes.png";
import "./Login.css";
import { useDarkMode } from "../../hooks/useDarkMode";
import { useTranslation } from "react-i18next";
import AnimatedComponent from "../../components/AnimatedComponent/AnimatedComponent";
import LoginForm from "./LoginForm";

function Login() {
  const { isDarkMode } = useDarkMode();
  const { t } = useTranslation();

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
        <AnimatedComponent>
          <h2 className="mb-4 text-center text-2xl font-semibold">
            {t("pages.login.title")}
          </h2>
          <LoginForm />
        </AnimatedComponent>
      </div>
    </section>
  );
}

export default Login;
