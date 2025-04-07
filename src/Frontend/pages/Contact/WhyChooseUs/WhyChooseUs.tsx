import CheckIcon from "../../../components/CheckIcon/CheckIcon";
import AboutImg1 from "../../../../assets/why-choose-us-img1.webp";
import AboutImg2 from "../../../../assets/why-choose-us-img2.webp";
import AboutImg3 from "../../../../assets/why-choose-us-img3.webp";

function WhyChooseUs() {
  return (
    <section className="container" id="why-choose-us">
      <article className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-8">
        <article className="order-2 md:order-none">
          <h1 className="text-lg uppercase mb-2">Por qué elegirnos</h1>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-5">
            Tu Seguridad es Nuestra Prioridad
          </h2>
          <div className="text-lg text-neutral-600 mb-6">
            <p className="mb-2">
              En LockKey, entendemos la importancia de mantener tus datos
              seguros. Nuestro gestor de contraseñas está diseñado para
              ofrecerte la máxima seguridad y facilidad de uso.
            </p>
            <p className="mb-2">
              Elegirnos significa optar por una solución que no solo protege tus
              contraseñas, sino que también simplifica tu vida digital. Con
              características avanzadas y un enfoque en la seguridad, somos la
              mejor opción para gestionar tus contraseñas.
            </p>
            <p>
              Nuestro compromiso es brindarte un servicio confiable y seguro,
              respaldado por un equipo de expertos en seguridad.
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 [&>li]:flex [&>li]:gap-3 [&>li]:mb-3 text-neutral-600">
            <li>
              <CheckIcon />
              Cifrado de Nivel Bancario
            </li>
            <li>
              <CheckIcon />
              Fácil de Usar
            </li>
            <li>
              <CheckIcon />
              Acceso desde Cualquier Lugar
            </li>
            <li>
              <CheckIcon />
              Soporte 24/7
            </li>
            <li>
              <CheckIcon />
              Autocompletado Seguro
            </li>
            <li>
              <CheckIcon />
              Generador de Contraseñas
            </li>
          </ul>
        </article>
        <aside className="order-1 md:order-none grid grid-cols-3 grid-rows-7 gap-6 mx-auto">
          <figure className="row-start-3 row-span-2 rounded-xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={AboutImg1}
              alt="Una mujer vestida de traje sosteniendo una Notebook."
              width={145}
              height={135}
            />
          </figure>
          <figure className="col-span-2 row-span-4 rounded-xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={AboutImg2}
              alt="Un hombre sentado en una silla escribiendo en un teclado mirando un monitor de computadora."
              width={365}
              height={335}
            />
          </figure>
          <figure className="col-span-2 row-span-3  rounded-xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={AboutImg3}
              alt="Un hombre y una mujer, en una oficina, mirando un monitor de computadora"
              width={407}
              height={251}
            />
          </figure>
        </aside>
      </article>
    </section>
  );
}

export default WhyChooseUs;
