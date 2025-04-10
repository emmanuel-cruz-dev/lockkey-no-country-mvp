import { useDarkMode } from "../../hooks/useDarkMode";
import usePasswordVault from "../../hooks/usePasswordVault";

function PasswordsVault() {
  const { isDarkMode } = useDarkMode();
  const { passwords } = usePasswordVault();

  return (
    <article className="flex-1 p-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <h1
          className={`${
            isDarkMode ? "text-white/90" : "text-gray-800"
          } text-2xl font-semibold`}
        >
          Tus Contraseñas
        </h1>
        <p className={`${isDarkMode ? "text-white/70" : "text-gray-600"} mt-2`}>
          Aquí puedes ver y gestionar tus contraseñas guardadas.
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
            Contraseñas Guardadas
          </h2>
          <ul className="mt-4 space-y-3">
            {passwords.map((password) => (
              <li
                key={password.id}
                className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
              >
                <div>
                  <p
                    className={`${
                      isDarkMode ? "text-white/90" : "text-gray-800"
                    } font-medium`}
                  >
                    {password.name}
                  </p>
                  <p
                    className={`${
                      isDarkMode ? "text-white/70" : "text-gray-600"
                    } text-sm`}
                  >
                    {password.username}
                  </p>
                </div>
                <button
                  className={`${
                    isDarkMode
                      ? "text-white/60 hover:text-white/70"
                      : "text-gray-500 hover:text-gray-700"
                  } `}
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
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default PasswordsVault;
