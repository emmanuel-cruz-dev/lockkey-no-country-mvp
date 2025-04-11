import { TeamCard } from "./TeamCard";
import { teamMembers } from "../../../mocks/teamMembers";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { useTranslation } from "react-i18next";
import AnimatedComponent from "../../../components/AnimatedComponent/AnimatedComponent";

function OurTeam() {
  const { isDarkMode } = useDarkMode();
  const { t } = useTranslation();

  return (
    <section className="container">
      <article className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-12">
        <article>
          <AnimatedComponent animation="slide" direction="left">
            <h2
              className={`${
                isDarkMode ? "text-white/80" : "text-neutral-800"
              } text-lg uppercase mb-2`}
            >
              {t("pages.about.ourTeam.title")}
            </h2>
            <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-5">
              {t("pages.about.ourTeam.subtitle")}
            </h3>
            <div
              className={`text-lg ${
                isDarkMode ? "text-white/70" : "text-neutral-600"
              }`}
            >
              <p className="mb-4">{t("pages.about.ourTeam.paragraph1")}</p>
              <p className="mb-4">{t("pages.about.ourTeam.paragraph2")}</p>
            </div>
          </AnimatedComponent>
        </article>
        <AnimatedComponent animation="slide" direction="right">
          <aside className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mx-auto">
            {teamMembers.map((member) => {
              return <TeamCard key={member.id} {...member} />;
            })}
          </aside>
        </AnimatedComponent>
      </article>
    </section>
  );
}

export default OurTeam;
