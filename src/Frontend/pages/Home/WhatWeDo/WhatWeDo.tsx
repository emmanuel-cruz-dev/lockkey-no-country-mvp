import WhatWeDoImg from "../../../../assets/what-we-do-banner.avif";
import { ShieldItem } from "./ShieldItem";

function WhatWeDo() {
  return (
    <section
      className="container what-we-do grid grid-cols-1 lg:grid-cols-5 justify-center items-center gap-2 py-12"
      id="what-we-do"
    >
      <figure className="w-2/3 md:max-w-72 xl:max-w-96 mx-auto lg:col-span-2 lg:ml-0">
        <img
          className="w-full object-cover custom-drop-shadow"
          src={WhatWeDoImg}
          alt="Icono de un mundo con líneas de conexión que salen de él."
          width={507}
          height={596}
          loading="lazy"
        />
      </figure>
      <article className="text-center md:text-left lg:col-span-3">
        <p className="text-lg uppercase mb-2">Nuestra misión</p>
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-5">
          Seguridad integral para una defensa digital{" "}
          <span className="text__purple-dark">sin límites</span>.
        </h2>
        <p className="text-lg mb-5 text-neutral-600">
          Protegemos tu entorno digital con estrategias efectivas, brindando
          confianza y tranquilidad ante cualquier amenaza en línea.
        </p>
        <footer className="grid grid-cols-1 sm:grid-cols-2 gap-3 gap-y-6">
          <ShieldItem
            title="Defensa Cibernética"
            text="Protección avanzada contra amenazas digitales y ataques informáticos."
          />
          <ShieldItem
            title="Seguridad en Redes"
            text="Blindamos tu conexión con protocolos seguros y encriptación robusta."
          />
          <ShieldItem
            title="Protección Web"
            text="Resguardamos tu sitio de accesos no autorizados y vulnerabilidades."
          />
          <ShieldItem
            title="Gestión de Accesos"
            text="Control seguro de credenciales y almacenamiento de datos sensibles."
          />
        </footer>
      </article>
    </section>
  );
}

export default WhatWeDo;
