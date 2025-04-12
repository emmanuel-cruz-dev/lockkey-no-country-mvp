import { useTranslation } from "react-i18next";
import WhatWeDoImg from "../../../../assets/what-we-do-banner.avif";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { ShieldItem } from "./ShieldItem";
import AnimatedComponent from "../../../components/AnimatedComponent/AnimatedComponent";

function WhatWeDo() {
  const { isDarkMode } = useDarkMode();
  const { t } = useTranslation();

  return (
    <section
      className="container overflow-x-hidden what-we-do grid grid-cols-1 lg:grid-cols-5 justify-center items-center gap-2 py-12"
      id="what-we-do"
    >
      <figure className="w-2/3 md:max-w-72 xl:max-w-96 mx-auto lg:col-span-2 lg:ml-0">
        <AnimatedComponent animation="slide" direction="right">
          <img
            className={`w-full object-cover custom-drop-shadow ${
              isDarkMode ? "dark__drop-shadow" : ""
            }`}
            src={WhatWeDoImg}
            alt="Icono de un mundo con líneas de conexión que salen de él."
            width={507}
            height={596}
            loading="lazy"
          />
        </AnimatedComponent>
      </figure>
      <article className="text-center md:text-left lg:col-span-3">
        <AnimatedComponent animation="slide" direction="left">
          <p
            className={`${
              isDarkMode ? "text-white/80" : "text-neutral-800"
            } text-lg uppercase mb-2`}
          >
            {t("pages.home.whatWeDo.paragraph")}
          </p>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-5">
            {t("pages.home.whatWeDo.title")}{" "}
            <span className="text__purple-dark">
              {t("pages.home.whatWeDo.titleSpan")}
            </span>
          </h2>
          <p
            className={`${
              isDarkMode ? "text-white/70" : "text-neutral-600"
            } text-lg mb-5`}
          >
            {t("pages.home.whatWeDo.description")}
          </p>
        </AnimatedComponent>
        <AnimatedComponent delay={2}>
          <footer className="grid grid-cols-1 sm:grid-cols-2 gap-3 gap-y-6">
            <ShieldItem
              title={t("pages.home.whatWeDo.shieldItem1.title")}
              text={t("pages.home.whatWeDo.shieldItem1.description")}
            />
            <ShieldItem
              title={t("pages.home.whatWeDo.shieldItem2.title")}
              text={t("pages.home.whatWeDo.shieldItem2.description")}
            />
            <ShieldItem
              title={t("pages.home.whatWeDo.shieldItem3.title")}
              text={t("pages.home.whatWeDo.shieldItem3.description")}
            />
            <ShieldItem
              title={t("pages.home.whatWeDo.shieldItem4.title")}
              text={t("pages.home.whatWeDo.shieldItem4.description")}
            />
          </footer>
        </AnimatedComponent>
      </article>
    </section>
  );
}

export default WhatWeDo;
