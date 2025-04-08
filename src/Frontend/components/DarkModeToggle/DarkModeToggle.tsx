import { useDarkMode } from "../../hooks/useDarkMode";
import { MdLightMode, MdDarkMode } from "react-icons/md";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      title={`${isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}`}
    >
      {isDarkMode ? <MdLightMode size={22} /> : <MdDarkMode size={22} />}
    </button>
  );
}

export default DarkModeToggle;
