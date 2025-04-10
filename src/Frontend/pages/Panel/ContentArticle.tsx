import { FC } from "react";
import { useDarkMode } from "../../hooks/useDarkMode";
import { useModal } from "../../Store/ModalContext";
import { ContentArticleProps } from "../../Store/types";

const ContentArticle: FC<ContentArticleProps> = ({
  title,
  subtitle,
  button,
  modalKey,
}) => {
  const { isDarkMode } = useDarkMode();
  const { openModal } = useModal();

  return (
    <article
      className={`${
        isDarkMode
          ? "dark-mode__background-color [&>h2]:text-white/90 [&>p]:text-white/70"
          : "bg-white"
      } mt-6 shadow-md rounded-lg p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg backdrop-blur-md bg-opacity-90`}
    >
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600">{subtitle}</p>
      <button
        className="mt-4 btn__primary btn__lime text-black"
        onClick={() => openModal(modalKey)}
      >
        {button}
      </button>
    </article>
  );
};

export default ContentArticle;
