import LogoIcon from "../../../assets/lockkey-logo.avif";
import { MdMenu, MdClose, MdPerson, MdPowerSettingsNew } from "react-icons/md";
import HeaderNavBar from "./HeaderNavBar";
import "./Header.css";
import { useNavMenu } from "../../hooks/useNavMenu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DarkModeToggle from "../../components/DarkModeToggle/DarkModeToggle";
import { useDarkMode } from "../../hooks/useDarkMode";

function Header() {
  const { isMenuOpen, handleClick } = useNavMenu();
  const location = useLocation();
  const navigate = useNavigate();
  const isPanel = location.pathname === "/panel";
  const { isDarkMode } = useDarkMode();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/");
  };

  return (
    <header
      className={`header ${
        isDarkMode ? "dark__header" : ""
      } p-4 md:px-10 md:py-5 text-[20px] font-[600] z-10 ${
        isPanel ? "mb-1" : "mb-8"
      }`}
    >
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 z-10" title="Inicio">
          <img
            className="max-w-12 bg-white md:bg-[#cff500] p-1 rounded-full"
            src={LogoIcon}
            alt="Logo de LockKey, una serpiente con un candado."
            width={200}
            height={200}
          />
          <p className="font-normal">
            Lock<strong>Key</strong>
          </p>
        </Link>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex">
            <HeaderNavBar handleClick={handleClick} />
          </div>

          <button
            className="md:hidden text-3xl z-10"
            onClick={handleClick}
            title={`${isMenuOpen ? "Cerrar Menú" : "Abrir Menú"}`}
          >
            {isMenuOpen ? <MdClose /> : <MdMenu />}
          </button>

          <div className="z-10 flex items-center px-1 pl-2">
            <DarkModeToggle />
          </div>

          {isPanel ? (
            <button
              onClick={handleLogout}
              className="text-3xl z-10 text-black hover:text-[--purple-vivid-color] transition-colors duration-300"
              title="Cerrar Sesión"
            >
              <MdPowerSettingsNew />
            </button>
          ) : (
            <Link
              to="/login"
              className="text-3xl hover:opacity-75 z-10"
              title="Iniciar Sesión"
            >
              <MdPerson />
            </Link>
          )}
        </div>

        <div
          className={`${
            isMenuOpen ? "active" : ""
          } header__hidden-menu__container md:hidden`}
        >
          <HeaderNavBar handleClick={handleClick} />
        </div>
      </div>
    </header>
  );
}

export default Header;
