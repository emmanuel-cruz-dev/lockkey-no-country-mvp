import { useDarkMode } from "../../../hooks/useDarkMode";
import { ContactForm } from "./ContactForm";

function Contact() {
  const { isDarkMode } = useDarkMode();

  return (
    <section className="container contact py-12" id="contact">
      <article className="text-center">
        <p
          className={`${
            isDarkMode ? "text-white/80" : "text-neutral-800"
          } text-lg uppercase mb-2`}
        >
          Empieza ahora
        </p>
        <h2 className="md:w-9/12 text-3xl xl:text-5xl font-bold mb-12 mx-auto">
          Envíanos un mensaje
        </h2>
        <ContactForm />
      </article>
    </section>
  );
}

export default Contact;
