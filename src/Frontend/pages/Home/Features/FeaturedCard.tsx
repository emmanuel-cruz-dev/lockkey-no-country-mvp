import { FC } from "react";
import { FeatureCardProps } from "../../../Store/types";

export const FeaturedCard: FC<FeatureCardProps> = ({
  img,
  title,
  paragraph,
}) => {
  return (
    <article className="w-11/12 mx-auto md:w-auto">
      <figure className="max-w-36 mb-4 mx-auto">
        <img
          className="w-full object-cover custom-drop-shadow"
          src={img}
          alt={`Icono que alude a ${title}`}
          width={155}
          height={155}
          loading="lazy"
        />
      </figure>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-lg">{paragraph}</p>
    </article>
  );
};
