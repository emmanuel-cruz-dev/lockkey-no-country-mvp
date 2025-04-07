import { FC } from "react";
import { ServicesCardProps } from "../../../Store/types";
import { useDarkMode } from "../../../hooks/useDarkMode";

export const ServicesCard: FC<ServicesCardProps> = ({
  title,
  img,
  paragraph,
}) => {
  const { isDarkMode } = useDarkMode();

  return (
    <article
      className={`box-shadow__item ${
        isDarkMode
          ? "dark__box-shadow__item bg-[rgba(255,255,255,0.05)]"
          : "bg-[#ffffff80]"
      } rounded-lg py-8 px-8 xl:px-12`}
    >
      <figure className="max-w-36 mx-auto my-8">
        <img
          className="w-full object-cover custom-drop-shadow"
          src={img}
          alt={`Imagen que alude a ${title}`}
          width={155}
          height={155}
        />
      </figure>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p
          className={`text-lg ${
            isDarkMode ? "text-white/70" : "text-neutral-700"
          }`}
        >
          {paragraph}
        </p>
      </div>
    </article>
  );
};
