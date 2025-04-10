import Addresses from "../../components/Addresses/Addresses";
import BankAccounts from "../../components/BankAccounts/BankAccounts";
import PasswordsVault from "../../components/PasswordsVault/PasswordsVault";
import PaymentCards from "../../components/PaymentCards/PaymentCards";
import SharingCenter from "../../components/SharingCenter/SharingCenter";
import { useDarkMode } from "../../hooks/useDarkMode";
import { useModal } from "../../Store/ModalContext";

const RenderMainContent = (activeButton: string) => {
  const { isDarkMode } = useDarkMode();
  const { openModal } = useModal();

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

export default RenderMainContent;
