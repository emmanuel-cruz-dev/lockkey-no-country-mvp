import { FaCheck } from "react-icons/fa";
import "./CheckIcon.css";

function CheckIcon() {
  return (
    <span className="check__icon shadow-lg shadow-black/20">
      <FaCheck size={14} />
    </span>
  );
}

export default CheckIcon;
