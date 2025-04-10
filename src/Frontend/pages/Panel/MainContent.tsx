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
          title={t("pages.panel.mainContent.articlesList.item1.title")}
          subtitle={t("pages.panel.mainContent.articlesList.item1.subtitle")}
          modalKey="password"
          button={t("pages.panel.mainContent.articlesList.item1.button")}
        />

        <ContentArticle
          title={t("pages.panel.mainContent.articlesList.item2.title")}
          subtitle={t("pages.panel.mainContent.articlesList.item2.subtitle")}
          modalKey="importPassword"
          button={t("pages.panel.mainContent.articlesList.item2.button")}
        />

        <ContentArticle
          title={t("pages.panel.mainContent.articlesList.item3.title")}
          subtitle={t("pages.panel.mainContent.articlesList.item3.subtitle")}
          modalKey="notes"
          button={t("pages.panel.mainContent.articlesList.item3.button")}
        />
      </section>
    </main>
  );
}

export default MainContent;
