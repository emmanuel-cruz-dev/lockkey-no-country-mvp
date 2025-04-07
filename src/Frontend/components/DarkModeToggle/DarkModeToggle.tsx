//import { useDarkMode } from "./context/DarkModeContext";
import { useDarkMode } from "../../context/DarkModeContext";

const DarkModeToggle: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
    >
      {isDarkMode ? "Modo Claro" : "Modo Oscuro"}
    </button>
  );
};

export default DarkModeToggle;
