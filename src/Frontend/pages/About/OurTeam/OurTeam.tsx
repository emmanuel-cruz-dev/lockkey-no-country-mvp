import { TeamCard } from "./TeamCard";
import { teamMembers } from "../../../mocks/teamMembers";

function OurTeam() {
  return (
    <section className="container">
      <article className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-8">
        <article>
          <h1 className="text-lg uppercase mb-2">Nuestro Equipo</h1>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-5">
            Expertos Detrás de la Seguridad
          </h2>
          <div className="text-lg text-neutral-600">
            <p className="mb-4">
              En LockKey, contamos con un equipo de profesionales altamente
              capacitados y dedicados a proporcionar las mejores soluciones de
              gestión de contraseñas. Nuestro equipo está compuesto por expertos
              en seguridad, desarrolladores y especialistas en soporte al
              cliente.
            </p>
            <p className="mb-4">
              Cada miembro de nuestro equipo aporta una vasta experiencia y
              conocimientos en sus respectivos campos, asegurando que nuestros
              productos y servicios sean de la más alta calidad. Nos esforzamos
              por mantenernos a la vanguardia de la tecnología y las mejores
              prácticas de seguridad.
            </p>
          </div>
        </article>
        <aside className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mx-auto">
          {teamMembers.map((member) => {
            return <TeamCard key={member.id} {...member} />;
          })}
        </aside>
      </article>
    </section>
  );
}

export default OurTeam;
