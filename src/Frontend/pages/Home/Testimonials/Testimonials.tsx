import QuoteImg from "../../../../assets/quote-img.avif";
import { testimonials } from "../../../mocks/testimonials";
import { Carousel } from "./Carousel";

function Testimonials() {
  return (
    <section
      className="testimonials relative background__accent-lime py-16"
      id="testimonials"
    >
      <article>
        <h2 className="text-center font-semibold text-lg md:text-2xl mb-8 text-neutral-700 px-6">
          Nuestro valor en palabras de quienes más importan
        </h2>
        <Carousel testimonials={testimonials} />
      </article>
      <img
        className="absolute bottom-0 right-0 w-48 md:w-auto"
        src={QuoteImg}
        alt="Signo de comillas"
        width={305}
        height={227}
        loading="lazy"
      />
    </section>
  );
}

export default Testimonials;
