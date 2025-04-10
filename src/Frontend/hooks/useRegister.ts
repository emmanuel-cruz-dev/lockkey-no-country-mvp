import { useReducer, useState, useEffect, useMemo } from "react";
import { Field, initialState } from "../Store/types";
import { reducer } from "../Store/reducer";
import { isValidEmail } from "../utils/utils";

const useRegister = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [passwordScore, setPasswordScore] = useState(0);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [emailError, setEmailError] = useState("");
  const [timeToCrack, setTimeToCrack] = useState("");
  const [apiError, setApiError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (!state.password) {
      setPasswordScore(0);
      setSuggestions([]);
      setTimeToCrack("");
      return;
    }

    const timeout = setTimeout(async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_BACKEND_URL + "/validate-password",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ password: state.password }),
          }
        );

        const data = await response.json();
        console.log("Respuesta del backend:", data);

        if (response.ok) {
          setPasswordScore(data.score || 0);
          setSuggestions(data.suggestions || []);
          setTimeToCrack(data.time_to_crack || "");
          setApiError("");
        } else {
          setApiError(data.error || "Error en la validación de la contraseña.");
        }
      } catch (error) {
        console.error("Error de conexión:", error);
        setApiError("Error al conectar con el servidor.");
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [state.password]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name as Field, value });

    if (name === "email") {
      setEmailError(isValidEmail(value) ? "" : "Correo electrónico no válido");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(state.email)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    if (state.password !== state.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    if (passwordScore < 3) {
      alert("La contraseña es demasiado débil. Usa una más segura.");
      return;
    }

    try {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(state),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Registro exitoso");
        window.location.href = "/login";
      } else {
        setApiError(data.error || "Error en el registro");
      }
    } catch (error) {
      console.error("Error de conexión:", error);
      setApiError("Error al conectar con el servidor.");
    }
  };

  const strengthColor = useMemo(() => {
    const colors = [
      "bg-red-500",
      "bg-orange-400",
      "bg-yellow-400",
      "bg-green-400",
      "bg-green-600",
    ];
    return colors[Math.min(Math.max(passwordScore, 0), colors.length - 1)]; // 🔹 Asegura que esté dentro del rango
  }, [passwordScore]);

  return {
    state,
    showPassword,
    passwordScore,
    suggestions,
    emailError,
    timeToCrack,
    apiError,
    togglePasswordVisibility,
    handleChange,
    handleSubmit,
    strengthColor,
  };
};

export default useRegister;
