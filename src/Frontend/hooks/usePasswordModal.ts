import { useState } from "react";
import { useModal } from "../Store/ModalContext";

const usePasswordModal = (onClose: () => void) => {
  const { modalData } = useModal();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [url, setUrl] = useState(modalData?.url || "");
  const [name, setName] = useState(modalData?.name || "");
  const [folder, setFolder] = useState(modalData?.folder || "");
  const [username, setUsername] = useState(modalData?.username || "");
  const [password, setPassword] = useState(modalData?.password || "");
  const [notes, setNotes] = useState(modalData?.notes || "");

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

  return {
    showPassword,
    error,
    url,
    setUrl,
    name,
    folder,
    setFolder,
    username,
    setUsername,
    password,
    setPassword,
    setName,
    notes,
    setNotes,
    togglePasswordVisibility,
    handleSubmit,
  };
};

export default usePasswordModal;
