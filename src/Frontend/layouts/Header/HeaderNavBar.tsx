import { Link } from "react-router-dom";
import "./HeaderNavBar.css";
import { FC } from "react";
import { HeaderNavBarProps } from "../../Store/types";
import { useDarkMode } from "../../hooks/useDarkMode";

const HeaderNavBar: FC<HeaderNavBarProps> = ({ handleClick }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <nav
      className={`header__navbar ${isDarkMode ? "dark__header__navbar" : ""}`}
    >
      <ul>
        <li onClick={handleClick}>
          <Link to="/">Inicio</Link>
        </li>
        <li onClick={handleClick}>
          <Link to="/about">Sobre Nosotros</Link>
        </li>
        <li onClick={handleClick}>
          <Link to="/services">Servicios</Link>
        </li>
        <li
          onClick={handleClick}
          className={`${
            isDarkMode ? "border-white" : "border-black"
          } border px-5 md:px-3 py-1 rounded-md hover:border-black hover:bg-black hover:text-white`}
        >
          <Link to="/contact">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNavBar;
