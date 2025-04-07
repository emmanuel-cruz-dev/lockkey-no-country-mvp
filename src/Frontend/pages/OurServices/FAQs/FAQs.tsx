import { Accordion } from "../../../components/Accordion/Accordion";
import { accordionData } from "../../../mocks/accordionContent";

function FAQs() {
  return (
    <section className="container FAQs py-12" id="FAQs">
      <article className="text-center">
        <p className="text-lg uppercase mb-2">Preguntas Frecuentes</p>
        <h2 className="md:w-9/12 text-3xl xl:text-5xl font-bold mb-12 mx-auto">
          Respondemos las dudas más comunes.
        </h2>
        <div className="flex flex-wrap -mx-2">
          <article className="w-full md:w-1/2 px-2">
            {accordionData
              .slice(0, Math.ceil(accordionData.length / 2))
              .map((item) => (
                <div key={item.id} className="mb-4 rounded-lg overflow-hidden">
                  <Accordion {...item} />
                </div>
              ))}
          </article>
          <article className="w-full md:w-1/2 px-2">
            {accordionData
              .slice(Math.ceil(accordionData.length / 2))
              .map((item) => (
                <div key={item.id} className="mb-4 rounded-lg overflow-hidden">
                  <Accordion {...item} />
                </div>
              ))}
          </article>
        </div>
      </article>
    </section>
  );
}

export default FAQs;
