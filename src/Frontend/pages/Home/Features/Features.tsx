import { FeaturedCard } from "./FeaturedCard";
import { featuresItems } from "../../../mocks/features";

function Features() {
  return (
    <section className="features container py-12" id="features">
      <article className="flex flex-col items-center">
        <p className="text-lg uppercase mb-2">
          Simplifica tu seguridad digital
        </p>
        <h2 className="text-center md:w-9/12 text-3xl xl:text-5xl font-bold mb-12 mx-auto">
          Gestiona tus contraseñas con facilidad, sin complicaciones ni riesgos.
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {featuresItems.map((item) => (
            <FeaturedCard key={item.id} {...item} />
          ))}
        </div>
      </article>
    </section>
  );
}

export default Features;
