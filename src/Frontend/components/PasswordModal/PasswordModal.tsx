import { useState } from "react";
import { useModal } from "./../../Store/ModalContext";
import { useDarkMode } from "../../hooks/useDarkMode";

const PasswordModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const { modalData } = useModal();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { isDarkMode } = useDarkMode();

  const [url, setUrl] = useState(modalData?.url || "");
  const [name, setName] = useState(modalData?.name || "");
  const [folder, setFolder] = useState(modalData?.folder || "");
  const [username, setUsername] = useState(modalData?.username || "");
  const [password, setPassword] = useState(modalData?.password || "");
  const [notes, setNotes] = useState(modalData?.notes || "");

  if (!isOpen) return null;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const savePassword = async () => {
    try {
      setError(null);
      const dataToSend = {
        url: url || "",
        name: name || "",
        folder: folder || "",
        username: username || "",
        password: password || "",
        notes: notes || "",
      };

      console.log("Datos a enviar:", dataToSend);

      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/passwords`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
          body: JSON.stringify(dataToSend),
        }
      );

      const responseData = await response.json();

      if (!response.ok) {
        console.error("Error del servidor:", responseData);
        setError(responseData.error || "Error al guardar la contraseña");
        throw new Error(responseData.error || "Error al guardar la contraseña");
      }

      console.log("Contraseña guardada:", responseData);
      onClose();
    } catch (error) {
      console.error("Error al guardar la contraseña:", error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    savePassword();
  };

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
          title="Cerrar"
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
            isDarkMode ? "text-white/90" : "text-gray-800"
          } text-lg font-semibold border-b pb-2 mb-4`}
        >
          {modalData?.editMode ? "Editar contraseña" : "Añadir contraseña"}
        </h2>

        {error && (
          <div className="mb-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="space-y-3">
            <div>
              <label
                className={`${
                  isDarkMode ? "text-white/70" : "text-gray-700"
                } block text-sm font-medium`}
              >
                URL:
              </label>
              <input
                type="text"
                className="w-full border rounded p-2 text-gray-800"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://ejemplo.com"
              />
            </div>
            <div className="flex gap-2">
              <div className="w-2/3">
                <label
                  className={`${
                    isDarkMode ? "text-white/70" : "text-gray-700"
                  } block text-sm font-medium`}
                >
                  Nombre:
                </label>
                <input
                  type="text"
                  className="w-full border rounded p-2 text-gray-800"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="w-1/3">
                <label
                  className={`${
                    isDarkMode ? "text-white/70" : "text-gray-700"
                  } block text-sm font-medium`}
                >
                  Carpeta:
                </label>
                <input
                  type="text"
                  className="w-full border rounded p-2 text-gray-800"
                  value={folder}
                  onChange={(e) => setFolder(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-1/2">
                <label
                  className={`${
                    isDarkMode ? "text-white/70" : "text-gray-700"
                  } block text-sm font-medium`}
                >
                  Nombre de usuario:
                </label>
                <input
                  type="text"
                  className="w-full border rounded p-2 text-gray-800"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="w-1/2">
                <label
                  className={`${
                    isDarkMode ? "text-white/70" : "text-gray-700"
                  } block text-sm font-medium`}
                >
                  Contraseña del sitio:
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full border rounded p-2 text-gray-800"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 px-2 flex items-center text-gray-500 hover:text-gray-700"
                    aria-label={
                      showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
                    }
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0
                                                011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532
                                                7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543
                                                7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542
                                                7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <label
                className={`${
                  isDarkMode ? "text-white/70" : "text-gray-700"
                } block text-sm font-medium`}
              >
                Notas:
              </label>
              <textarea
                className="w-full border rounded p-2 text-gray-800 h-24"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-6 pt-3 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="text-black px-4 py-2 btn__primary btn__lime rounded transition-colors"
            >
              {modalData?.editMode ? "Actualizar" : "Guardar"}
            </button>
          </div>
        </form>
      </div>
    </article>
  );
};

export default PasswordModal;
