import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng); // Guarda la preferencia del usuario
  };

  return (
    <div>
      <button
        onClick={() => changeLanguage("en")}
        className={`p-2 ${i18n.language === "en" ? "font-bold" : ""}`}
      >
        En
      </button>
      |
      <button
        onClick={() => changeLanguage("es")}
        className={`p-2 ${i18n.language === "es" ? "font-bold" : ""}`}
      >
        Es
      </button>
    </div>
  );
};

export default LanguageSwitcher;
