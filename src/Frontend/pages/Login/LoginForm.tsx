import { useTranslation } from "react-i18next";
import { useDarkMode } from "../../hooks/useDarkMode";
import useLogin from "../../hooks/useLogin";
import { Link } from "react-router-dom";

function LoginForm() {
  const { isDarkMode } = useDarkMode();
  const { t } = useTranslation();
  const { state, handleChange, handleSubmit } = useLogin();

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-black">
      <div>
        <label
          className={`block text-sm font-medium ${
            isDarkMode ? "text-white/80" : "text-gray-700"
          }`}
        >
          {t("pages.login.email")}
        </label>
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          className="mt-1 w-full rounded-md border px-3 py-2"
          required
        />
      </div>
      <div>
        <label
          className={`block text-sm font-medium ${
            isDarkMode ? "text-white/80" : "text-gray-700"
          }`}
        >
          {t("pages.login.password")}
        </label>
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          className="mt-1 w-full rounded-md border px-3 py-2"
          required
        />
      </div>
      <p
        className={`mt-4 text-center text-sm ${
          isDarkMode ? "text-white/80" : "text-gray-600"
        }`}
      >
        {t("pages.login.account")}{" "}
        <Link
          to="/register"
          className={`text-blue-600 ${
            isDarkMode ? "text-blue-400" : ""
          } hover:underline`}
        >
          {t("pages.login.signUp")}
        </Link>
      </p>
      <button
        type="submit"
        className="btn__primary btn__lime w-full text-black"
      >
        {t("pages.login.logButton")}
      </button>
    </form>
  );
}

export default LoginForm;
