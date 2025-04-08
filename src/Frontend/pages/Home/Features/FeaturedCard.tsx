import { FC } from "react";
import { FeatureCardProps } from "../../../Store/types";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { useTranslation } from "react-i18next";

export const FeaturedCard: FC<FeatureCardProps> = ({
  img,
  title,
  paragraph,
}) => {
  const { isDarkMode } = useDarkMode();
  const { t } = useTranslation();

  return (
    <article className="w-11/12 mx-auto md:w-auto">
      <figure className="max-w-36 mb-4 mx-auto">
        <img
          className={`w-full object-cover custom-drop-shadow ${
            isDarkMode ? "dark__drop-shadow" : ""
          }`}
          src={img}
          alt={`Icono que alude a ${title}`}
          width={155}
          height={155}
          loading="lazy"
        />
      </figure>
      <h3
        className={`${
          isDarkMode ? "text-white/90" : "text-neutral-900"
        } text-2xl font-semibold mb-4`}
      >
        {t(`${title}`)}
      </h3>
      <p
        className={`${
          isDarkMode ? "text-white/70" : "text-neutral-700"
        } text-lg`}
      >
        {t(`${paragraph}`)}
      </p>
    </article>
  );
};
