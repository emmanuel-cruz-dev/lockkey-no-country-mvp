import { useEffect, useState } from "react";
import { PasswordProps } from "../Store/types";

const usePasswordVault = () => {
  const [passwords, setPasswords] = useState<PasswordProps[]>([]);

  useEffect(() => {
    const fetchPasswords = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/passwords`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Error al obtener las contraseñas");
        }

        const data = await response.json();
        console.log("Datos recibidos del backend:", data);
        setPasswords(data.passwords);
      } catch (error) {
        console.error("Error al obtener las contraseñas:", error);
      }
    };

    fetchPasswords();
  }, []);

  return { passwords };
};

export default usePasswordVault;
