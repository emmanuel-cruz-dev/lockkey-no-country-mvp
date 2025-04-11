import { useTranslation } from "react-i18next";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { ContactForm } from "./ContactForm";
import AnimatedComponent from "../../../components/AnimatedComponent/AnimatedComponent";

function Contact() {
  const { isDarkMode } = useDarkMode();
  const { t } = useTranslation();

  return (
    <section className="container contact py-12" id="contact">
      <article className="text-center">
        <AnimatedComponent animation="slide" direction="down">
          <h2
            className={`${
              isDarkMode ? "text-white/80" : "text-neutral-800"
            } text-lg uppercase mb-2`}
          >
            {t("pages.contact.contact.title")}
          </h2>
        </AnimatedComponent>
        <AnimatedComponent animation="fade" direction="in" delay={2}>
          <h3 className="md:w-9/12 text-3xl xl:text-5xl font-bold mb-12 mx-auto">
            {t("pages.contact.contact.subtitle")}
          </h3>
        </AnimatedComponent>
        <ContactForm />
      </article>
    </section>
  );
}

export default Contact;
