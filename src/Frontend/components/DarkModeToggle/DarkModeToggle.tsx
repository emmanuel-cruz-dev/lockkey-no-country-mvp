import { useDarkMode } from "../../hooks/useDarkMode";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? <IoSunnyOutline size={22} /> : <IoMoonOutline size={22} />}
    </button>
  );
}

export default DarkModeToggle;
