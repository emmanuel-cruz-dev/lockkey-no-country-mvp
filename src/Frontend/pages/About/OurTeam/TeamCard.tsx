import { FC } from "react";
import { TeamCardProps } from "../../../Store/types";
import SocialIcons from "../../../components/SocialIcons/SocialIcons";

export const TeamCard: FC<TeamCardProps> = ({
  img,
  name,
  occupation,
  linkedin,
  github,
  portfolio,
}) => {
  return (
    <article className="text-center">
      <header className="box-shadow__item relative mb-8 rounded-lg">
        <figure className="rounded-lg overflow-hidden">
          <img
            className="w-full object-cover"
            src={img}
            alt={`${name}, ${occupation}.`}
            width={472}
            height={440}
            loading="lazy"
          />
        </figure>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <SocialIcons
            borderRadius={true}
            linkedin={linkedin}
            github={github}
            portfolio={portfolio}
          />
        </div>
      </header>
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="uppercase text-neutral-600">{occupation}</p>
    </article>
  );
};
