import { FC } from "react";
import { ServicesCardProps } from "../../../Store/types";
import "./ServicesCard.css";

export const ServicesCard: FC<ServicesCardProps> = ({
  title,
  img,
  paragraph,
}) => {
  return (
    <article className="box-shadow__item services-card__container rounded-lg py-8 px-8 xl:px-12">
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
        <p className="text-lg">{paragraph}</p>
      </div>
    </article>
  );
};
