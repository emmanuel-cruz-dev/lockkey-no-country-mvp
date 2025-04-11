import { useTranslation } from "react-i18next";
import { Accordion } from "../../../components/Accordion/Accordion";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { accordionData } from "../../../mocks/accordionData";
import AnimatedComponent from "../../../components/AnimatedComponent/AnimatedComponent";

function FAQs() {
  const { isDarkMode } = useDarkMode();
  const { t } = useTranslation();

  return (
    <section className="container FAQs py-12" id="FAQs">
      <article className="text-center">
        <AnimatedComponent animation="slide" direction="down">
          <h2
            className={`${
              isDarkMode ? "text-white/80" : "text-neutral-800"
            } text-lg uppercase mb-2`}
          >
            {t("pages.ourServices.FAQs.title")}
          </h2>
        </AnimatedComponent>
        <AnimatedComponent animation="fade" direction="in" delay={2}>
          <h3 className="md:w-9/12 text-3xl xl:text-5xl font-bold mb-12 mx-auto">
            {t("pages.ourServices.FAQs.subtitle")}
          </h3>
        </AnimatedComponent>

        <div className="flex flex-wrap -mx-2">
          <article className="w-full md:w-1/2 px-2">
            {accordionData
              .slice(0, Math.ceil(accordionData.length / 2))
              .map((item) => (
                <div key={item.id} className="mb-4 rounded-lg overflow-hidden">
                  <Accordion {...item} />
                </div>
              ))}
          </article>
          <article className="w-full md:w-1/2 px-2">
            {accordionData
              .slice(Math.ceil(accordionData.length / 2))
              .map((item) => (
                <div key={item.id} className="mb-4 rounded-lg overflow-hidden">
                  <Accordion {...item} />
                </div>
              ))}
          </article>
        </div>
      </article>
    </section>
  );
}

export default FAQs;
