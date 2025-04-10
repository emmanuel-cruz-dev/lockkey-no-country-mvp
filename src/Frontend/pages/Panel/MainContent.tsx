import { useTranslation } from "react-i18next";
import { useDarkMode } from "../../hooks/useDarkMode";
import ContentArticle from "./ContentArticle";

function MainContent() {
  const { isDarkMode } = useDarkMode();
  const { t } = useTranslation();

  return (
    <main className="flex-1 p-6 relative z-10">
      <section className="max-w-4xl mx-auto">
        <h1
          className={`${
            isDarkMode ? "text-white/90" : "text-gray-800"
          } text-2xl font-semibold`}
        >
          {t("pages.panel.mainContent.title")}
        </h1>
        <p className={`${isDarkMode ? "text-white/60" : "text-gray-600"} mt-2`}>
          {t("pages.panel.mainContent.subtitle")}
        </p>

        <ContentArticle
          title="Añadir nueva contraseña"
          subtitle="Guarda tus credenciales de forma segura."
          modalKey="password"
          button="Añadir Contraseña"
        />

        <ContentArticle
          title="Importar contraseñas"
          subtitle="Trae tus contraseñas desde otro servicio."
          modalKey="importPassword"
          button="Importar"
        />

        <ContentArticle
          title="Añadir nota segura"
          subtitle="Crea notas seguras a las que nadie tendra acceso."
          modalKey="notes"
          button="Crear"
        />
      </section>
    </main>
  );
}

export default MainContent;
