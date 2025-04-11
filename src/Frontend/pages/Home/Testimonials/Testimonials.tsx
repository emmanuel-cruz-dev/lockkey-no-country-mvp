import { useTranslation } from "react-i18next";
import QuoteImg from "../../../../assets/quote-img.avif";
import { testimonials } from "../../../mocks/testimonials";
import { Carousel } from "./Carousel";
import AnimatedComponent from "../../../components/AnimatedComponent/AnimatedComponent";

function Testimonials() {
  const { t } = useTranslation();

  return (
    <section
      className="testimonials relative background__accent-lime py-16"
      id="testimonials"
    >
      <AnimatedComponent>
        <article>
          <h2 className="text-center font-semibold text-lg md:text-2xl mb-8 text-neutral-700 px-6">
            {t("pages.home.testimonials.title")}
          </h2>
          <Carousel testimonials={testimonials} />
        </article>
      </AnimatedComponent>
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
