import { useState } from "react";
import { useModal } from "./../../Store/ModalContext";
import PasswordsVault from "./../../components/PasswordsVault/PasswordsVault";
import { useDarkMode } from "../../hooks/useDarkMode";
import "./Panel.css";
import SharingCenter from "../../components/SharingCenter/SharingCenter";
import Addresses from "../../components/Addresses/Addresses";
import PaymentCards from "../../components/PaymentCards/PaymentCards";
import BankAccounts from "../../components/BankAccounts/BankAccounts";

function Panel() {
  const [activeButton, setActiveButton] = useState<string>(
    "Todos los elementos"
  );
  const { openModal } = useModal();
  const { isDarkMode } = useDarkMode();

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
    if (buttonName === "Notas") {
      openModal("notes");
    }
  };

  const renderMainContent = () => {
    switch (activeButton) {
      case "Centro de uso compartido":
        return <SharingCenter />;
      case "Contraseñas":
        return <PasswordsVault />;
      case "Notas":
        return null;
      case "Direcciones":
        return <Addresses />;
      case "Tarjetas de pago":
        return <PaymentCards />;
      case "Cuentas bancarias":
        return <BankAccounts />;
      default:
        return (
          <main className="flex-1 p-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h1
                className={`${
                  isDarkMode ? "text-white/90" : "text-gray-800"
                } text-2xl font-semibold`}
              >
                ¡Bienvenida a tu panel!
              </h1>
              <p
                className={`${
                  isDarkMode ? "text-white/60" : "text-gray-600"
                } mt-2`}
              >
                Aquí puedes gestionar tus contraseñas, notas y otros elementos.
              </p>

              <div
                className={`${
                  isDarkMode
                    ? "dark-mode__background-color [&>h2]:text-white/90 [&>p]:text-white/70"
                    : "bg-white"
                } mt-6 shadow-md rounded-lg p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg backdrop-blur-md bg-opacity-90`}
              >
                <h2 className="text-lg font-semibold text-gray-800">
                  Añadir nueva contraseña
                </h2>
                <p className="text-gray-600">
                  Guarda tus credenciales de forma segura.
                </p>
                <button
                  className="mt-4 btn__primary btn__lime text-black"
                  onClick={() => openModal("password")}
                >
                  Añadir Contraseña
                </button>
              </div>

              <div
                className={`${
                  isDarkMode
                    ? "dark-mode__background-color [&>h2]:text-white/90 [&>p]:text-white/70"
                    : "bg-white"
                } mt-4 shadow-md rounded-lg p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg backdrop-blur-md bg-opacity-90`}
              >
                <h2 className="text-lg font-semibold text-gray-800">
                  Importar contraseñas
                </h2>
                <p className="text-gray-600">
                  Trae tus contraseñas desde otro servicio.
                </p>
                <button
                  className="mt-4 btn__primary btn__lime text-black"
                  onClick={() => openModal("importPassword")}
                >
                  Importar
                </button>
              </div>

              <div
                className={`${
                  isDarkMode
                    ? "dark-mode__background-color [&>h2]:text-white/90 [&>p]:text-white/70"
                    : "bg-white"
                } mt-4 shadow-md rounded-lg p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg backdrop-blur-md bg-opacity-90`}
              >
                <h2 className="text-lg font-semibold text-gray-800">
                  Añadir nota segura
                </h2>
                <p className="text-gray-600">
                  Crea Notas seguras a las que nadie tendra acceso.
                </p>
                <button
                  className="mt-4 btn__primary btn__lime text-black"
                  onClick={() => openModal("notes")}
                >
                  Crear
                </button>
              </div>
            </div>
          </main>
        );
    }
  };

  return (
    <section className="flex min-h-screen relative -mt-1">
      <aside
        className={`${
          isDarkMode ? "bg-[#171d34]" : "bg-white"
        } w-64 xl:w-80 pt-6 p-4 shadow-md backdrop-blur-md bg-opacity-10 hover:shadow-lg relative`}
      >
        <h2
          className={`${
            isDarkMode ? "text-white/80" : "text-gray-800"
          } text-xl font-semibold mb-6 text-center `}
        >
          Panel
        </h2>
        <nav
          className={`${
            isDarkMode ? "nav__panel-button__container" : ""
          } space-y-3`}
        >
          <button
            className={`w-full text-left py-2 px-4 rounded transition-colors duration-200 ${
              activeButton === "Todos los elementos"
                ? "bg-black text-white active"
                : "hover:bg-gray-100 text-gray-700"
            }`}
            onClick={() => handleButtonClick("Todos los elementos")}
          >
            Todos los elementos
          </button>
          <button
            className={`w-full text-left py-2 px-4 rounded transition-colors duration-200 ${
              activeButton === "Centro de uso compartido"
                ? "bg-black text-white active"
                : "hover:bg-gray-100 text-gray-700"
            }`}
            onClick={() => handleButtonClick("Centro de uso compartido")}
          >
            Centro de uso compartido
          </button>
          <button
            className={`w-full text-left py-2 px-4 rounded transition-colors duration-200 ${
              activeButton === "Contraseñas"
                ? "bg-black text-white active"
                : "hover:bg-gray-100 text-gray-700"
            }`}
            onClick={() => handleButtonClick("Contraseñas")}
          >
            Contraseñas
          </button>
          <button
            className={`w-full text-left py-2 px-4 rounded transition-colors duration-200 ${
              activeButton === "Notas"
                ? "bg-black text-white active"
                : "hover:bg-gray-100 text-gray-700"
            }`}
            onClick={() => handleButtonClick("Notas")}
          >
            Notas
          </button>
          <button
            className={`w-full text-left py-2 px-4 rounded transition-colors duration-200 ${
              activeButton === "Direcciones"
                ? "bg-black text-white active"
                : "hover:bg-gray-100 text-gray-700"
            }`}
            onClick={() => handleButtonClick("Direcciones")}
          >
            Direcciones
          </button>
          <button
            className={`w-full text-left py-2 px-4 rounded transition-colors duration-200 ${
              activeButton === "Tarjetas de pago"
                ? "bg-black text-white active"
                : "hover:bg-gray-100 text-gray-700"
            }`}
            onClick={() => handleButtonClick("Tarjetas de pago")}
          >
            Tarjetas de pago
          </button>
          <button
            className={`w-full text-left py-2 px-4 rounded transition-colors duration-200 ${
              activeButton === "Cuentas bancarias"
                ? "bg-black text-white active"
                : "hover:bg-gray-100 text-gray-700"
            }`}
            onClick={() => handleButtonClick("Cuentas bancarias")}
          >
            Cuentas bancarias
          </button>
        </nav>
      </aside>

      <div
        className={`${
          isDarkMode
            ? "from-blue-50/5 to-purple-50/5"
            : "from-blue-200/10 to-purple-200/10"
        } w-full bg-gradient-to-br`}
      >
        {renderMainContent()}
      </div>

      <div className="z-[-1] absolute bottom-0 right-0 w-64 h-64 bg-lime-300 rounded-full opacity-20 -mr-16 -mb-16 blur-2xl"></div>
      <div className="z-[-1] absolute top-0 -right-16 lg:right-12 w-32 h-32 bg-blue-300 rounded-full opacity-20 -mt-16 blur-xl"></div>
    </section>
  );
}

export default Panel;
