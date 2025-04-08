import { useTranslation } from "react-i18next";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { pricingCardData } from "../../../mocks/pricingPlans";
import { PricingCard } from "./PricingCard";

function PricingPlans() {
  const { isDarkMode } = useDarkMode();
  const { t } = useTranslation();

  return (
    <section
      className="container pricing-plans flex flex-col gap-2 py-12"
      id="pricing-plans"
    >
      <article className="text-center lg:col-span-3">
        <p
          className={`${
            isDarkMode ? "text-white/80" : "text-neutral-800"
          } text-lg uppercase mb-2`}
        >
          {t("pages.home.pricingPlans.paragraph")}
        </p>
        <h2 className="md:w-9/12 text-3xl xl:text-5xl font-bold mb-12 mx-auto">
          {t("pages.home.pricingPlans.title")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
          {pricingCardData.map((item) => (
            <PricingCard key={item.id} {...item} />
          ))}
        </div>
      </article>
    </section>
  );
}

export default PricingPlans;
