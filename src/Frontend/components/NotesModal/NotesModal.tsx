import { FC } from "react";
import { useDarkMode } from "../../hooks/useDarkMode";
import { useModal } from "./../../Store/ModalContext";
import { ImportPasswordModalProps } from "../../Store/types";
import { useTranslation } from "react-i18next";

const NotesModal: FC<ImportPasswordModalProps> = ({ isOpen, onClose }) => {
  const { modalData } = useModal();
  const { isDarkMode } = useDarkMode();
  const { t } = useTranslation();

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
              ? "text-white/80 hover:text-white"
              : "text-gray-500 hover:text-gray-700"
          } absolute top-2 right-2`}
          aria-label="Cerrar"
          title={t("components.close")}
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
          } text-lg font-semibold border-b pb-2 mb-4`}
        >
          {modalData?.editMode
            ? t("components.notesModal.editNote")
            : t("components.notesModal.addSecureNote")}
        </h2>

        <div className="space-y-3">
          <div>
            <label
              className={`${
                isDarkMode ? "text-white/70" : "text-gray-700"
              } block text-sm font-medium`}
            >
              {t("components.notesModal.name")}:
            </label>
            <input
              type="text"
              className="w-full border rounded p-2 text-gray-800"
              defaultValue={modalData?.name || ""}
            />
          </div>
          <div>
            <label
              className={`${
                isDarkMode ? "text-white/70" : "text-gray-700"
              } block text-sm font-medium`}
            >
              {t("components.notesModal.folder")}:
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full border rounded p-2 text-gray-800"
                defaultValue={modalData?.folder || ""}
              />
              <button
                className="absolute inset-y-0 right-0 px-3 flex items-center"
                aria-label="Seleccionar carpeta"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="pt-2">
            <details>
              <summary
                className={`${
                  isDarkMode ? "text-white/70" : "text-gray-700"
                } text-sm font-medium cursor-pointer`}
              >
                {t("components.notesModal.advancedSettings")}:
              </summary>
              <div className="pt-2">
                <button
                  className={`${
                    isDarkMode ? "text-white/70" : "text-gray-700 "
                  } hover:text-gray-900 flex items-center gap-2 text-sm p-2 rounded hover:bg-gray-100`}
                >
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
                      d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                    />
                  </svg>
                  {t("components.notesModal.addAttachment")}
                </button>
              </div>
            </details>
          </div>

          <div>
            <textarea
              className="w-full border rounded p-2 text-gray-800 h-auto"
              defaultValue={modalData?.content || ""}
              placeholder={t("components.notesModal.textarea")}
            ></textarea>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6 pt-3 border-t">
          <div className="flex-grow flex items-center space-x-2">
            <button
              className="p-1 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
              aria-label="Marcar como favorito"
              title={t("components.notesModal.markFavorite")}
            >
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
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </button>
            <button
              className="p-1 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
              aria-label="Refrescar"
              title={t("components.notesModal.refresh")}
            >
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
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </button>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded transition-colors"
          >
            {t("components.cancel")}
          </button>
          <button className="px-4 py-2 btn__primary btn__lime text-black rounded transition-colors">
            {modalData?.editMode
              ? t("components.update")
              : t("components.save")}
          </button>
        </div>
      </div>
    </article>
  );
};

export default NotesModal;
