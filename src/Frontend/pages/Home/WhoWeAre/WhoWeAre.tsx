import WhoWeAreImg from "../../../../assets/who-we-are-banner.avif";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { CounterItem } from "./CounterItem";

function WhoWeAre() {
  const { isDarkMode } = useDarkMode();

  return (
    <section
      className="container who-we-are grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-2 py-12"
      id="who-we-are"
    >
      <article className="order-2 md:order-1 text-center md:text-left">
        <p
          className={`${
            isDarkMode ? "text-white/80" : "text-neutral-800"
          } text-lg uppercase mb-2`}
        >
          Quiénes somos
        </p>
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-5">
          Protegiendo{" "}
          <span className="text__purple-dark">tu seguridad digital</span> con
          dedicación, tecnología y confianza
        </h2>
        <p
          className={`${
            isDarkMode ? "text-white/70" : "text-neutral-700"
          } text-lg mb-5`}
        >
          Somos un equipo comprometido con la ciberseguridad, ofreciendo
          soluciones innovadoras para proteger información valiosa. Nuestra
          misión es garantizar la tranquilidad digital de usuarios y empresas
          con tecnología avanzada y eficiente.
        </p>
        <footer className="flex flex-col md:flex-row gap-8">
          <CounterItem count="2K" text="Reseñas positivas" />
          <CounterItem count="17M" text="Usuarios protegidos" />
          <CounterItem count="18K" text="Empresas afiliadas" />
        </footer>
      </article>
      <figure className="order-1 md:order-2 w-2/3 md:w-80 lg:w-96 mx-auto md:mr-0">
        <img
          className="w-full object-cover custom-drop-shadow"
          src={WhoWeAreImg}
          alt="Un icono de una persona con gafas y sombrero, frente a una notebook."
          width={564}
          height={631}
          loading="lazy"
        />
      </figure>
    </section>
  );
}

export default WhoWeAre;
