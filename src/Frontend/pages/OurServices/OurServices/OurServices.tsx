import { useTranslation } from "react-i18next";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { services } from "../../../mocks/services";
import { ServicesCard } from "./ServicesCard";
import AnimatedComponent from "../../../components/AnimatedComponent/AnimatedComponent";

function OurServices() {
  const { isDarkMode } = useDarkMode();
  const { t } = useTranslation();

  return (
    <section className="container flex flex-col gap-2 py-12" id="our-services">
      <article className="text-center lg:col-span-3">
        <AnimatedComponent animation="slide" direction="down">
          <h1
            className={`${
              isDarkMode ? "text-white/80" : "text-neutral-800"
            } text-lg uppercase mb-2`}
          >
            {t("pages.ourServices.ourServices.title")}
          </h1>
        </AnimatedComponent>
        <AnimatedComponent animation="fade" direction="in" delay={2}>
          <h2 className="md:w-9/12 text-3xl xl:text-5xl font-bold mb-12 mx-auto">
            {t("pages.ourServices.ourServices.subtitle")}
          </h2>
        </AnimatedComponent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
          {services.map((service) => {
            return <ServicesCard key={service.id} {...service} />;
          })}
        </div>
      </article>
    </section>
  );
}

export default OurServices;
