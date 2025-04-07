import { useDarkMode } from "../../hooks/useDarkMode";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      title={`${isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}`}
    >
      {isDarkMode ? <IoSunnyOutline size={22} /> : <IoMoonOutline size={22} />}
    </button>
  );
}

export default DarkModeToggle;
