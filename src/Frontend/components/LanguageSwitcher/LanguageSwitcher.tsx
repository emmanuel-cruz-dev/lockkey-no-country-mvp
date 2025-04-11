import { useState } from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const changeLanguage = () => {
    const newLanguage = currentLanguage === "es" ? "en" : "es";
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
    // i18n.changeLanguage(lng);
    // localStorage.setItem("language", lng); // Guarda la preferencia del usuario
  };

  return (
    <button
      onClick={() => changeLanguage()}
      className="text-[18px]"
      title={t("layout.header.switchLanguage")}
    >
      {currentLanguage === "es" ? "EN" : "ES"}
    </button>
  );
}

export default LanguageSwitcher;
