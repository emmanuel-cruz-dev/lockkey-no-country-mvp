import { useState, useEffect } from "react";

export const useScrollButton = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Función para manejar el scroll y mostrar/ocultar el botón
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Añadir event listener para el scroll cuando el componente se monta
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // Limpiar el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return { isVisible, scrollToTop };
};
