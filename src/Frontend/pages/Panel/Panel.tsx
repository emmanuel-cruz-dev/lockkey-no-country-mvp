import { useDarkMode } from "../../hooks/useDarkMode";
import "./Panel.css";
import usePanel from "../../hooks/usePanel";
import RenderMainContent from "./RenderMainContent";
import { useTranslation } from "react-i18next";

function Panel() {
  const { activeButton, handleButtonClick } = usePanel();
  const { isDarkMode } = useDarkMode();
  const { t } = useTranslation();

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
          {t("pages.panel.dashboard")}
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
            {t("pages.panel.allItems")}
          </button>
          <button
            className={`w-full text-left py-2 px-4 rounded transition-colors duration-200 ${
              activeButton === "Centro de uso compartido"
                ? "bg-black text-white active"
                : "hover:bg-gray-100 text-gray-700"
            }`}
            onClick={() => handleButtonClick("Centro de uso compartido")}
          >
            {t("pages.panel.sharingCenter")}
          </button>
          <button
            className={`w-full text-left py-2 px-4 rounded transition-colors duration-200 ${
              activeButton === "Contraseñas"
                ? "bg-black text-white active"
                : "hover:bg-gray-100 text-gray-700"
            }`}
            onClick={() => handleButtonClick("Contraseñas")}
          >
            {t("pages.panel.passwords")}
          </button>
          <button
            className={`w-full text-left py-2 px-4 rounded transition-colors duration-200 ${
              activeButton === "Notas"
                ? "bg-black text-white active"
                : "hover:bg-gray-100 text-gray-700"
            }`}
            onClick={() => handleButtonClick("Notas")}
          >
            {t("pages.panel.notes")}
          </button>
          <button
            className={`w-full text-left py-2 px-4 rounded transition-colors duration-200 ${
              activeButton === "Direcciones"
                ? "bg-black text-white active"
                : "hover:bg-gray-100 text-gray-700"
            }`}
            onClick={() => handleButtonClick("Direcciones")}
          >
            {t("pages.panel.addresses")}
          </button>
          <button
            className={`w-full text-left py-2 px-4 rounded transition-colors duration-200 ${
              activeButton === "Tarjetas de pago"
                ? "bg-black text-white active"
                : "hover:bg-gray-100 text-gray-700"
            }`}
            onClick={() => handleButtonClick("Tarjetas de pago")}
          >
            {t("pages.panel.paymentCards")}
          </button>
          <button
            className={`w-full text-left py-2 px-4 rounded transition-colors duration-200 ${
              activeButton === "Cuentas bancarias"
                ? "bg-black text-white active"
                : "hover:bg-gray-100 text-gray-700"
            }`}
            onClick={() => handleButtonClick("Cuentas bancarias")}
          >
            {t("pages.panel.bankAccounts")}
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
        {RenderMainContent(activeButton)}
      </div>

      <div className="z-[-1] absolute bottom-0 right-0 w-64 h-64 bg-lime-300 rounded-full opacity-20 -mr-16 -mb-16 blur-2xl"></div>
      <div className="z-[-1] absolute top-0 -right-16 lg:right-12 w-32 h-32 bg-blue-300 rounded-full opacity-20 -mt-16 blur-xl"></div>
    </section>
  );
}

export default Panel;
