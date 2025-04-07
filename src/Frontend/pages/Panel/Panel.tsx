import { useState } from "react";
import { useModal } from "./../../Store/ModalContext";
import PasswordsVault from "./../../components/PasswordsVault/PasswordsVault";

const Panel = () => {
  const [activeButton, setActiveButton] = useState<string>(
    "Todos los elementos"
  );
  const { openModal } = useModal();

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
    if (buttonName === "Notas") {
      openModal("notes");
    }
  };

  const renderMainContent = () => {
    switch (activeButton) {
      case "Contraseñas":
        return <PasswordsVault />;
      case "Notas":
        return null;
      default:
        return (
          <main className="flex-1 p-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-2xl font-semibold text-gray-800">
                ¡Bienvenida a tu panel!
              </h1>
              <p className="mt-2 text-gray-600">
                Aquí puedes gestionar tus contraseñas, notas y otros elementos.
              </p>

              <div className="mt-6 bg-white shadow-md rounded-lg p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg backdrop-blur-md bg-opacity-90">
                <h2 className="text-lg font-semibold text-gray-800">
                  Añadir nueva contraseña
                </h2>
                <p className="text-gray-600">
                  Guarda tus credenciales de forma segura.
                </p>
                <button
                  className="btn__primary btn__lime"
                  onClick={() => openModal("password")}
                >
                  Añadir Contraseña
                </button>
              </div>

              <div className="mt-4 bg-white shadow-md rounded-lg p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg backdrop-blur-md bg-opacity-90">
                <h2 className="text-lg font-semibold text-gray-800">
                  Importar contraseñas
                </h2>
                <p className="text-gray-600">
                  Trae tus contraseñas desde otro servicio.
                </p>
                <button
                  className="mt-4 btn__primary btn__lime"
                  onClick={() => openModal("importPassword")}
                >
                  Importar
                </button>
              </div>

              <div className="mt-4 bg-white shadow-md rounded-lg p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg backdrop-blur-md bg-opacity-90">
                <h2 className="text-lg font-semibold text-gray-800">
                  Añadir nota segura
                </h2>
                <p className="text-gray-600">
                  Crea Notas seguras a las que nadie tendra acceso.
                </p>
                <button
                  className="mt-4 btn__primary btn__lime"
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
    <div className="flex h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-80"></div>

      <aside className="w-64 bg-white p-4 shadow-md backdrop-blur-md bg-opacity-90 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg relative z-10">
        <h2 className="text-xl font-semibold mb-6 text-center text-gray-800">
          Panel
        </h2>
        <nav className="space-y-3">
          <button
            className={`w-full text-left py-2 px-4 rounded transition-colors duration-200 ${
              activeButton === "Todos los elementos"
                ? "bg-black text-white"
                : "hover:bg-gray-100 text-gray-700"
            }`}
            onClick={() => handleButtonClick("Todos los elementos")}
          >
            Todos los elementos
          </button>
          <button
            className={`w-full text-left py-2 px-4 rounded transition-colors duration-200 ${
              activeButton === "Centro de uso compartido"
                ? "bg-black text-white"
                : "hover:bg-gray-100 text-gray-700"
            }`}
            onClick={() => handleButtonClick("Centro de uso compartido")}
          >
            Centro de uso compartido
          </button>
          <button
            className={`w-full text-left py-2 px-4 rounded transition-colors duration-200 ${
              activeButton === "Contraseñas"
                ? "bg-black text-white"
                : "hover:bg-gray-100 text-gray-700"
            }`}
            onClick={() => handleButtonClick("Contraseñas")}
          >
            Contraseñas
          </button>
          <button
            className={`w-full text-left py-2 px-4 rounded transition-colors duration-200 ${
              activeButton === "Notas"
                ? "bg-black text-white"
                : "hover:bg-gray-100 text-gray-700"
            }`}
            onClick={() => handleButtonClick("Notas")}
          >
            Notas
          </button>
          <button
            className={`w-full text-left py-2 px-4 rounded transition-colors duration-200 ${
              activeButton === "Direcciones"
                ? "bg-black text-white"
                : "hover:bg-gray-100 text-gray-700"
            }`}
            onClick={() => handleButtonClick("Direcciones")}
          >
            Direcciones
          </button>
          <button
            className={`w-full text-left py-2 px-4 rounded transition-colors duration-200 ${
              activeButton === "Tarjetas de pago"
                ? "bg-black text-white"
                : "hover:bg-gray-100 text-gray-700"
            }`}
            onClick={() => handleButtonClick("Tarjetas de pago")}
          >
            Tarjetas de pago
          </button>
          <button
            className={`w-full text-left py-2 px-4 rounded transition-colors duration-200 ${
              activeButton === "Cuentas bancarias"
                ? "bg-black text-white"
                : "hover:bg-gray-100 text-gray-700"
            }`}
            onClick={() => handleButtonClick("Cuentas bancarias")}
          >
            Cuentas bancarias
          </button>
        </nav>
      </aside>

      {renderMainContent()}

      <div className="absolute bottom-0 right-0 w-64 h-64 bg-lime-300 rounded-full opacity-20 -mr-16 -mb-16 blur-2xl"></div>
      <div className="absolute top-0 left-1/2 w-32 h-32 bg-blue-300 rounded-full opacity-20 -mt-16 blur-xl"></div>
    </div>
  );
};

export default Panel;
