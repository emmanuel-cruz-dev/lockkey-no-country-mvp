import { Link } from "react-router-dom";
import "./HeaderNavBar.css";
import { FC } from "react";
import { HeaderNavBarProps } from "../../Store/types";

const HeaderNavBar: FC<HeaderNavBarProps> = ({ handleClick }) => {
  return (
    <nav className="header__navbar">
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
          className="border border-black px-5 md:px-3 py-1 rounded-md hover:bg-black hover:text-white"
        >
          <Link to="/contact">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNavBar;
