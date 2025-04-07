import { Link } from "react-router-dom";
import TalkBannerImg from "../../../../assets/talk-banner.avif";

function TalkBanner() {
  return (
    <section className="container talk-banner py-12" id="talk-banner">
      <article className="box-shadow__item background__accent-purple relative p-8 flex flex-col justify-center items-center min-h-80 rounded-2xl overflow-hidden">
        <h2 className="text-center text-3xl lg:text-5xl text-white font-bold w-5/6 mb-6 z-10">
          Administra y protege tus contraseñas de forma sencilla y segura.
        </h2>
        <Link
          to="/login"
          className="btn__primary btn__lime shadow-lg shadow-black/30 z-10"
        >
          Empezar ahora
        </Link>
        <img
          className="absolute w-full h-full object-cover"
          src={TalkBannerImg}
          alt="Fondo de imagen, puntos dispersos en líneas onduladas."
          width={1110}
          height={324}
          loading="lazy"
        />
      </article>
    </section>
  );
}

export default TalkBanner;
