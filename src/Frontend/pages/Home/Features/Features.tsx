import { FeaturedCard } from "./FeaturedCard";
import { featuresItems } from "../../../mocks/features";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { useTranslation } from "react-i18next";
import AnimatedComponent from "../../../components/AnimatedComponent/AnimatedComponent";

function Features() {
  const { isDarkMode } = useDarkMode();
  const { t } = useTranslation();

  return (
    <section className="features container py-16" id="features">
      <article className="flex flex-col items-center">
        <AnimatedComponent animation="slide" direction="down">
          <p
            className={`${
              isDarkMode ? "text-white/80" : "text-neutral-800"
            } text-lg uppercase mb-2`}
          >
            {t("pages.home.features.paragraph")}
          </p>
        </AnimatedComponent>
        <AnimatedComponent animation="fade" direction="in" delay={2}>
          <h2 className="text-center md:w-9/12 text-3xl xl:text-5xl font-bold mb-12 mx-auto">
            {t("pages.home.features.title")}
          </h2>
        </AnimatedComponent>
        <main className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {featuresItems.map((item) => (
            <FeaturedCard key={item.id} {...item} />
          ))}
        </main>
      </article>
    </section>
  );
}

export default Features;
