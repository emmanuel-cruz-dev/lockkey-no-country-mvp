import { FC } from "react";
import { ShieldItemProps } from "../../../Store/types";
import ShieldIcon from "../../../../assets/shield-icon.avif";

export const ShieldItem: FC<ShieldItemProps> = ({ title, text }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4">
      <figure className="w-14 md:w-20 lg:w-24 flex justify-center">
        <img
          className="object-cover w-full custom-drop-shadow"
          src={ShieldIcon}
          alt="Icono de un escudo"
          width={51}
          height={59}
          loading="lazy"
        />
      </figure>
      <div>
        <h3 className="font-bold text-xl mb-1">{title}</h3>
        <p className="xl:text-[15px] text-neutral-600 font-semibold max-w-96">
          {text}
        </p>
      </div>
    </div>
  );
};
