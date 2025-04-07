import { pricingCardData } from "../../../mocks/pricingPlans";
import { PricingCard } from "./PricingCard";

function PricingPlans() {
  return (
    <section
      className="container pricing-plans flex flex-col gap-2 py-12"
      id="pricing-plans"
    >
      <article className="text-center lg:col-span-3">
        <p className="text-lg uppercase mb-2">Elige tu nivel de seguridad</p>
        <h2 className="md:w-9/12 text-3xl xl:text-5xl font-bold mb-12 mx-auto">
          Planes de protección diseñados para cada necesidad.
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
