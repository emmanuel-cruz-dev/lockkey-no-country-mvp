import { useDarkMode } from "../../hooks/useDarkMode";

function PaymentCards() {
  const { isDarkMode } = useDarkMode();

  return (
    <article className="flex-1 p-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <h1
          className={`${
            isDarkMode ? "text-white/90" : "text-gray-800"
          } text-2xl font-semibold`}
        >
          Tus Tarjetas de Pago
        </h1>
        <p className={`${isDarkMode ? "text-white/70" : "text-gray-600"} mt-2`}>
          Aquí puedes añadir, editar o eliminar las tarjetas de débito o crédito
          que utilizas.
        </p>

        <div
          className={`${
            isDarkMode ? "dark-mode__background-color" : "bg-white"
          } mt-6 shadow-md rounded-lg p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg backdrop-blur-md bg-opacity-90`}
        >
          <h2
            className={`${
              isDarkMode ? "text-white/90" : "text-gray-800"
            } text-lg font-semibold`}
          >
            Tarjetas Guardadas
          </h2>
        </div>
      </div>
    </article>
  );
}

export default PaymentCards;
