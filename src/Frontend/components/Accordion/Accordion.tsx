import { FC } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { AccordionProps } from "../../Store/types";
import { useActiveIndex } from "../../hooks/useActiveIndex";
import { useDarkMode } from "../../hooks/useDarkMode";
import { useTranslation } from "react-i18next";

export const Accordion: FC<AccordionProps> = ({ id, title, content }) => {
  const { activeIndex, toggleSection } = useActiveIndex();
  const { isDarkMode } = useDarkMode();
  const { t } = useTranslation();

  return (
    <article key={id} className="text-left">
      <button
        onClick={() => toggleSection(id)}
        className={`w-full flex justify-between items-center p-4 text-left ${
          isDarkMode
            ? "bg-white/20 hover:bg-white/10"
            : "bg-white hover:bg-gray-50"
        }  transition-colors`}
      >
        <span className="font-semibold">{t(`${title}`)}</span>
        <span className="background__accent-lime text-black rounded-full p-2">
          {activeIndex === id ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>
      {activeIndex === id && (
        <main
          className={`p-4 ${
            isDarkMode
              ? "bg-white/10 text-white/90"
              : "bg-gray-50 text-gray-700"
          } transition-all duration-300 ease-in-out`}
        >
          {t(`${content}`)}
        </main>
      )}
    </article>
  );
};
