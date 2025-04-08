import { Link } from "react-router-dom";
import "./HeaderNavBar.css";
import { FC } from "react";
import { HeaderNavBarProps } from "../../Store/types";
import { useDarkMode } from "../../hooks/useDarkMode";
import { useTranslation } from "react-i18next";

const HeaderNavBar: FC<HeaderNavBarProps> = ({ handleClick }) => {
  const { isDarkMode } = useDarkMode();
  const { t } = useTranslation();

  return (
    <nav
      className={`header__navbar ${isDarkMode ? "dark__header__navbar" : ""}`}
    >
      <ul>
        <li onClick={handleClick}>
          <Link to="/">{t("layout.header.home")}</Link>
        </li>
        <li onClick={handleClick}>
          <Link to="/about">{t("layout.header.about")}</Link>
        </li>
        <li onClick={handleClick}>
          <Link to="/services">{t("layout.header.services")}</Link>
        </li>
        <li
          onClick={handleClick}
          className={`${
            isDarkMode ? "border-white" : "border-black"
          } border px-5 md:px-3 py-1 rounded-md hover:border-black hover:bg-black hover:text-white`}
        >
          <Link to="/contact">{t("layout.header.contact")}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNavBar;
