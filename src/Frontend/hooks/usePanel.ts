import { useState } from "react";
import { useModal } from "../Store/ModalContext";

const usePanel = () => {
  const [activeButton, setActiveButton] = useState<string>(
    "Todos los elementos"
  );
  const { openModal } = useModal();

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
    if (buttonName === "Notas") {
      openModal("notes");
    }
  };
  return { activeButton, handleButtonClick };
};

export default usePanel;
