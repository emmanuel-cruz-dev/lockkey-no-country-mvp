import { useTranslation } from "react-i18next";
import AboutImg1 from "../../../../assets/about-page-img1.webp";
import AboutImg2 from "../../../../assets/about-page-img2.webp";
import AboutImg3 from "../../../../assets/about-page-img3.webp";
import CheckIcon from "../../../components/CheckIcon/CheckIcon";
import { useDarkMode } from "../../../hooks/useDarkMode";
import AnimatedComponent from "../../../components/AnimatedComponent/AnimatedComponent";

function AboutUs() {
  const { isDarkMode } = useDarkMode();
  const { t } = useTranslation();

  return (
    <section className="container overflow-x-hidden md:overflow-x-visible">
      <article className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-8">
        <AnimatedComponent animation="slide" direction="right">
          <article className="w-5/6 md:w-auto grid grid-cols-2 gap-8 mx-auto">
            <img
              className={`col-span-2 rounded-xl overflow-hidden box-shadow__item ${
                isDarkMode ? "dark__box-shadow__item" : ""
              }`}
              src={AboutImg1}
              alt="Una mujer sosteniendo un celular frente a una notebook."
              width={540}
              height={335}
            />
            <img
              className={`hidden md:block rounded-xl overflow-hidden box-shadow__item ${
                isDarkMode ? "dark__box-shadow__item" : ""
              }`}
              src={AboutImg2}
              alt="Una mujer vestida de traje sosteniendo un celular que le ilumina la cara."
              width={255}
              height={251}
            />
            <img
              className={`hidden md:block rounded-xl overflow-hidden box-shadow__item ${
                isDarkMode ? "dark__box-shadow__item" : ""
              }`}
              src={AboutImg3}
              alt="Una chica con una campera con la capucha puesta, sosteniendo una notebook."
              width={255}
              height={251}
            />
          </article>
        </AnimatedComponent>
        <aside>
          <AnimatedComponent animation="slide" direction="left">
            <h1
              className={`${
                isDarkMode ? "text-white/80" : "text-neutral-800"
              } text-lg uppercase mb-2`}
            >
              {t("pages.about.aboutUs.title")}
            </h1>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-5">
              {t("pages.about.aboutUs.subtitle")}
            </h2>
            <div
              className={`text-lg ${
                isDarkMode ? "text-white/70" : "text-neutral-600"
              } mb-8`}
            >
              <p className="mb-2">{t("pages.about.aboutUs.paragraph1")}</p>
              <p>{t("pages.about.aboutUs.paragraph2")}</p>
            </div>
          </AnimatedComponent>
          <AnimatedComponent delay={2}>
            <ul
              className={`grid grid-cols-1 sm:grid-cols-2 [&>li]:flex [&>li]:gap-3 [&>li]:mb-6 ${
                isDarkMode ? "text-white/60" : "text-neutral-600"
              }`}
            >
              <li>
                <CheckIcon />
                {t("pages.about.aboutUs.itemsList.item1")}
              </li>
              <li>
                <CheckIcon />
                {t("pages.about.aboutUs.itemsList.item2")}
              </li>
              <li>
                <CheckIcon />
                {t("pages.about.aboutUs.itemsList.item3")}
              </li>
              <li>
                <CheckIcon />
                {t("pages.about.aboutUs.itemsList.item4")}
              </li>
              <li>
                <CheckIcon />
                {t("pages.about.aboutUs.itemsList.item5")}
              </li>
              <li>
                <CheckIcon />
                {t("pages.about.aboutUs.itemsList.item6")}
              </li>
              <li>
                <CheckIcon />
                {t("pages.about.aboutUs.itemsList.item7")}
              </li>
              <li>
                <CheckIcon />
                {t("pages.about.aboutUs.itemsList.item8")}
              </li>
            </ul>
          </AnimatedComponent>
        </aside>
      </article>
    </section>
  );
}

export default AboutUs;
