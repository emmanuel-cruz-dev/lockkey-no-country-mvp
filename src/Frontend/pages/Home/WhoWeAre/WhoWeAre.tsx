import { useTranslation } from "react-i18next";
import WhoWeAreImg from "../../../../assets/who-we-are-banner.avif";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { CounterItem } from "./CounterItem";
import AnimatedComponent from "../../../components/AnimatedComponent/AnimatedComponent";

function WhoWeAre() {
  const { isDarkMode } = useDarkMode();
  const { t } = useTranslation();

  return (
    <section
      className="container who-we-are grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-2 py-12"
      id="who-we-are"
    >
      <article className="order-2 md:order-1 text-center md:text-left">
        <AnimatedComponent animation="slide" direction="right">
          <p
            className={`${
              isDarkMode ? "text-white/80" : "text-neutral-800"
            } text-lg uppercase mb-2`}
          >
            {t("pages.home.whoWeAre.paragraph")}
          </p>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-5">
            {t("pages.home.whoWeAre.title1")}{" "}
            <span className="text__purple-dark">
              {t("pages.home.whoWeAre.titleSpan")}
            </span>{" "}
            {t("pages.home.whoWeAre.title2")}
          </h2>
          <p
            className={`${
              isDarkMode ? "text-white/70" : "text-neutral-700"
            } text-lg mb-5`}
          >
            {t("pages.home.whoWeAre.description")}
          </p>
        </AnimatedComponent>
        <AnimatedComponent>
          <footer className="flex flex-col md:flex-row gap-8">
            <CounterItem
              count={16}
              quantity="K"
              text={t("pages.home.whoWeAre.counterItem1")}
            />
            <CounterItem
              count={18}
              quantity="M"
              text={t("pages.home.whoWeAre.counterItem2")}
            />
            <CounterItem
              count={23}
              quantity="K"
              text={t("pages.home.whoWeAre.counterItem3")}
            />
          </footer>
        </AnimatedComponent>
      </article>
      <figure className="order-1 md:order-2 w-2/3 md:w-80 lg:w-96 mx-auto md:mr-0">
        <AnimatedComponent animation="slide" direction="left">
          <img
            className={`w-full object-cover custom-drop-shadow ${
              isDarkMode ? "dark__drop-shadow" : ""
            }`}
            src={WhoWeAreImg}
            alt="Un icono de una persona con gafas y sombrero, frente a una notebook."
            width={564}
            height={631}
            loading="lazy"
          />
        </AnimatedComponent>
      </figure>
    </section>
  );
}

export default WhoWeAre;
