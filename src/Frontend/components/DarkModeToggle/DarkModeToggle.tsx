import { useTranslation } from "react-i18next";
import { useDarkMode } from "../../hooks/useDarkMode";
import { MdLightMode, MdDarkMode } from "react-icons/md";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { t } = useTranslation();

  return (
    <button
      className="hover:text-[--purple-vivid-color] transition-colors duration-300"
      onClick={toggleDarkMode}
      title={
        isDarkMode
          ? `${t("layout.header.darkModeButton")}`
          : `${t("layout.header.lightModeButton")}`
      }
    >
      {isDarkMode ? <MdLightMode size={22} /> : <MdDarkMode size={22} />}
    </button>
  );
}

export default DarkModeToggle;
