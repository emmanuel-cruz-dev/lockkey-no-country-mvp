import { PricingCardProps } from "../../../Store/types";
import { FC } from "react";
import "./PricingCard.css";
import CheckIcon from "../../../components/CheckIcon/CheckIcon";
import { Link } from "react-router-dom";

export const PricingCard: FC<PricingCardProps> = ({
  category,
  img,
  price,
  list,
}) => {
  return (
    <Link
      to="/login"
      className="pricing-card__container rounded-lg py-8 px-8 xl:px-12"
      title="Ver detalles del plan"
    >
      <span className="pricing-card__category">{category}</span>
      <figure className="max-w-40 flex justify-center mx-auto mb-4">
        <img
          className="w-full object-cover custom-drop-shadow"
          src={img}
          alt={`Imagen que representa el valor de el plan ${category} metaforicamente.`}
          width={390}
          height={390}
          loading="lazy"
        />
      </figure>
      <div className="mb-4">
        <strong className="text-5xl">${price}</strong>
        <p className="font-semibold text-neutral-600">/ Al mes</p>
      </div>
      <div className="text-left">
        <ul className="pricing-card__list font-semibold text-neutral-600 [&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:mb-3">
          {list.map((item: string, index: number) => (
            <li key={index}>
              <CheckIcon />
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
};
