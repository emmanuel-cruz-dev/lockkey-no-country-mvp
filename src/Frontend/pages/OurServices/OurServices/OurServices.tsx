import { services } from "../../../mocks/services";
import { ServicesCard } from "./ServicesCard";

function OurServices() {
  return (
    <section className="container flex flex-col gap-2 py-12" id="our-services">
      <article className="text-center lg:col-span-3">
        <p className="text-lg uppercase mb-2">Nuestros Servicios</p>
        <h2 className="md:w-9/12 text-3xl xl:text-5xl font-bold mb-12 mx-auto">
          Seguridad y Control a tu Alcance.
        </h2>
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
