import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaGlobe,
} from "react-icons/fa";
import "./SocialIcons.css";
import { FC } from "react";
import { SocialIconsProps } from "../../Store/types";

const SocialIcons: FC<SocialIconsProps> = ({
  borderRadius,
  linkedin,
  github,
  portfolio,
}) => {
  const border = borderRadius
    ? "rounded-full bg-cyan-200 text-lg p-3"
    : "rounded-md bg-white/30 text-xl p-4";

  return (
    <ul className="social-icons__container flex gap-3">
      <li>
        <a
          className={`${border}`}
          href={linkedin || "#"}
          title="Linkedin"
          target={linkedin ? "_blank" : undefined}
          rel={linkedin ? "noopener noreferrer" : undefined}
        >
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a
          className={`${border}`}
          href={github || "#"}
          title={borderRadius ? "GitHub" : "Facebook"}
          target={github ? "_blank" : undefined}
          rel={github ? "noopener noreferrer" : undefined}
        >
          {borderRadius ? <FaGithub /> : <FaFacebook />}
        </a>
      </li>
      <li>
        <a
          className={`${border}`}
          href={portfolio || "#"}
          title={borderRadius ? "Portfolio" : "Instagram"}
          target={portfolio ? "_blank" : undefined}
          rel={portfolio ? "noopener noreferrer" : undefined}
        >
          {borderRadius ? <FaGlobe /> : <FaInstagram />}
        </a>
      </li>
    </ul>
  );
};

export default SocialIcons;
