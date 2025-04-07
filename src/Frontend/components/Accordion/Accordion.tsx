import { FC } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { AccordionProps } from "../../Store/types";
import { useActiveIndex } from "../../hooks/useActiveIndex";

export const Accordion: FC<AccordionProps> = ({ id, title, content }) => {
  const { activeIndex, toggleSection } = useActiveIndex();

  return (
    <div key={id} className="text-left">
      <button
        onClick={() => toggleSection(id)}
        className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold">{title}</span>
        <span className="background__accent-lime rounded-full p-2">
          {activeIndex === id ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>
      {activeIndex === id && (
        <div className="p-4 bg-gray-50 text-gray-700 transition-all duration-300 ease-in-out">
          {content}
        </div>
      )}
    </div>
  );
};
