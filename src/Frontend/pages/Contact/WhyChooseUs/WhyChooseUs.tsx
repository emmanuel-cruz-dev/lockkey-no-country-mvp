import CheckIcon from "../../../components/CheckIcon/CheckIcon";
import AboutImg1 from "../../../../assets/why-choose-us-img1.webp";
import AboutImg2 from "../../../../assets/why-choose-us-img2.webp";
import AboutImg3 from "../../../../assets/why-choose-us-img3.webp";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { useTranslation } from "react-i18next";
import AnimatedComponent from "../../../components/AnimatedComponent/AnimatedComponent";

function WhyChooseUs() {
  const { isDarkMode } = useDarkMode();
  const { t } = useTranslation();

  return (
    <section className="container" id="why-choose-us">
      <article className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-8">
        <article className="order-2 md:order-none">
          <AnimatedComponent animation="slide" direction="right">
            <h1
              className={`${
                isDarkMode ? "text-white/80" : "text-neutral-800"
              } text-lg uppercase mb-2`}
            >
              {t("pages.contact.whyChooseUs.title")}
            </h1>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-5">
              {t("pages.contact.whyChooseUs.subtitle")}
            </h2>
            <div
              className={`text-lg ${
                isDarkMode ? "text-white/70" : "text-neutral-600"
              } mb-8`}
            >
              <p className="mb-2">
                {t("pages.contact.whyChooseUs.paragraph1")}
              </p>
              <p className="mb-2">
                {t("pages.contact.whyChooseUs.paragraph2")}
              </p>
              <p>{t("pages.contact.whyChooseUs.paragraph3")}</p>
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
                {t("pages.contact.whyChooseUs.itemsList.item1")}
              </li>
              <li>
                <CheckIcon />
                {t("pages.contact.whyChooseUs.itemsList.item2")}
              </li>
              <li>
                <CheckIcon />
                {t("pages.contact.whyChooseUs.itemsList.item3")}
              </li>
              <li>
                <CheckIcon />
                {t("pages.contact.whyChooseUs.itemsList.item4")}
              </li>
              <li>
                <CheckIcon />
                {t("pages.contact.whyChooseUs.itemsList.item5")}
              </li>
              <li>
                <CheckIcon />
                {t("pages.contact.whyChooseUs.itemsList.item6")}
              </li>
            </ul>
          </AnimatedComponent>
        </article>
        <AnimatedComponent animation="slide" direction="left">
          <aside className="order-1 md:order-none grid grid-cols-3 grid-rows-7 gap-6 mx-auto">
            <figure
              className={`row-start-3 row-span-2 rounded-xl overflow-hidden box-shadow__item ${
                isDarkMode ? "dark__box-shadow__item" : ""
              }`}
            >
              <img
                className="w-full h-full object-cover"
                src={AboutImg1}
                alt="Una mujer vestida de traje sosteniendo una Notebook."
                width={145}
                height={135}
              />
            </figure>
            <figure
              className={`col-span-2 row-span-4 rounded-xl overflow-hidden box-shadow__item ${
                isDarkMode ? "dark__box-shadow__item" : ""
              }`}
            >
              <img
                className="w-full h-full object-cover"
                src={AboutImg2}
                alt="Un hombre sentado en una silla escribiendo en un teclado mirando un monitor de computadora."
                width={365}
                height={335}
              />
            </figure>
            <figure
              className={`col-span-2 row-span-3  rounded-xl overflow-hidden box-shadow__item ${
                isDarkMode ? "dark__box-shadow__item" : ""
              }`}
            >
              <img
                className="w-full h-full object-cover"
                src={AboutImg3}
                alt="Un hombre y una mujer, en una oficina, mirando un monitor de computadora"
                width={407}
                height={251}
              />
            </figure>
          </aside>
        </AnimatedComponent>
      </article>
    </section>
  );
}

export default WhyChooseUs;
