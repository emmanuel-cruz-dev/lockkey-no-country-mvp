import HeroBanner from "../../../../assets/hero-banner.avif";
import CircleImg from "../../../../assets/circle-background-img.avif";
import GradientImg from "../../../../assets/gradient-background-img.avif";
import { Link } from "react-router-dom";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { useTranslation } from "react-i18next";
import AnimatedComponent from "../../../components/AnimatedComponent/AnimatedComponent";

function Hero() {
  const { isDarkMode } = useDarkMode();
  const { t } = useTranslation();

  return (
    <main
      className="hero relative container grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-2 py-4 sm:py-12 md:py-6"
      id="hero"
    >
      <section className="order-2 md:order-1">
        <AnimatedComponent animation="slide" direction="right">
          <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold mb-6">
            {t("pages.home.hero.title1")}{" "}
            <span className="text__purple-dark">
              {t("pages.home.hero.titleSpan")}
            </span>{" "}
            {t("pages.home.hero.title2")}
          </h1>
        </AnimatedComponent>
        <AnimatedComponent animation="slide" direction="left">
          <p
            className={`text-xl font-[400] leading-[33px] mb-6 ${
              isDarkMode ? "text-white/80" : "text-neutral-700"
            }`}
          >
            {t("pages.home.hero.description")}
          </p>
        </AnimatedComponent>
        <AnimatedComponent animation="slide" delay={4}>
          <div className="flex gap-4 mb-5">
            <Link
              to="/login"
              className="whitespace-nowrap btn__primary btn__lime text-black"
            >
              {t("pages.home.hero.startButton")}
            </Link>
            <Link
              to="/contact"
              className={`whitespace-nowrap btn__primary ${
                isDarkMode ? "border-white" : ""
              }`}
            >
              {t("pages.home.hero.contactButton")}
            </Link>
          </div>
          <p
            className={`text-sm ${
              isDarkMode ? "text-white/60" : "text-neutral-600"
            }`}
          >
            {t("pages.home.hero.paragraph")}
          </p>
        </AnimatedComponent>
      </section>
      <figure className="order-1 md:order-2 w-2/3 md:w-80 lg:w-96 mx-auto md:mr-0">
        <AnimatedComponent animation="scale" direction="in">
          <img
            className={`w-full object-cover custom-drop-shadow ${
              isDarkMode ? "dark__drop-shadow" : ""
            }`}
            src={HeroBanner}
            alt="Icono de una pantalla con un escudo delante, el escudo tiene un simbolo de check en el centro."
            width={601}
            height={565}
          />
        </AnimatedComponent>
      </figure>
      <img
        className="absolute z-[-1] w-72 -top-40 -left-56 opacity-10 transform rotate-180"
        src={CircleImg}
        alt="Línea circular formando un anillo."
        width={445}
        height={405}
      />
      <img
        className="hidden lg:block absolute z-[-1] -right-96 opacity-60"
        src={GradientImg}
        alt="Fondo gradiente de puntos formando ondulaciones."
        width={1689}
        height={1263}
      />
    </main>
  );
}

export default Hero;
