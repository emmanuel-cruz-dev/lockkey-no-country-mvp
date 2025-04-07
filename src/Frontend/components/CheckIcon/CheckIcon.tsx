import { FaCheck } from "react-icons/fa";
import "./CheckIcon.css";
import { useDarkMode } from "../../hooks/useDarkMode";

function CheckIcon() {
  const { isDarkMode } = useDarkMode();

  return (
    <span
      className={`check__icon shadow-lg ${
        isDarkMode ? "shadow-white/20" : "shadow-black/20"
      }`}
    >
      <FaCheck size={14} />
    </span>
  );
}

export default CheckIcon;
