import { useDarkMode } from "../../hooks/useDarkMode";

const ImportPasswordModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const { isDarkMode } = useDarkMode();

  if (!isOpen) return null;

  return (
    <article className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999]">
      <div
        className={`${
          isDarkMode ? "dark-mode__background-color" : "bg-white"
        } w-[500px] p-6 rounded-lg shadow-lg relative`}
      >
        <button
          onClick={onClose}
          className={`${
            isDarkMode
              ? "text-white/70 hover:text-white"
              : "text-gray-500 hover:text-gray-700"
          } absolute top-2 right-2`}
          aria-label="Cerrar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2
          className={`${
            isDarkMode ? "text-white/80" : "text-gray-800"
          } text-lg font-semibold  border-b pb-2 mb-4`}
        >
          Importar contraseñas
        </h2>

        <div className="space-y-3">
          <div>
            <label
              className={`${
                isDarkMode ? "text-white/70" : "text-gray-700"
              } block text-sm font-medium`}
            >
              Selecciona el archivo:
            </label>
            <input
              type="file"
              className={`${
                isDarkMode ? "text-white/80" : "text-gray-800"
              } w-full border rounded p-2 cursor-pointer`}
            />
          </div>
          <div>
            <label
              className={`${
                isDarkMode ? "text-white/70" : "text-gray-700"
              } block text-sm font-medium`}
            >
              Formato del archivo:
            </label>
            <select className="w-full border rounded p-2 text-gray-800">
              <option value="csv">CSV</option>
              <option value="json">JSON</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6 pt-3 border-t">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded transition-colors"
          >
            Cancelar
          </button>
          <button className="text-black px-4 py-2 btn__primary btn__lime rounded transition-colors">
            Importar
          </button>
        </div>
      </div>
    </article>
  );
};

export default ImportPasswordModal;
