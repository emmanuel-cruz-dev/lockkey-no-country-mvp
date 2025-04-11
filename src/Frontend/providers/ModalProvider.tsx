import { FC, useState } from "react";
import { ModalDataType, ModalProviderProps } from "../Store/types";
import { ModalContext } from "../Store/ModalContext";

export const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<string | null>(null);
  const [modalData, setModalData] = useState<ModalDataType>(null);

  const openModal = (type: string, data?: ModalDataType) => {
    setModalType(type);
    setModalData(data || null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType(null);
    setModalData(null);
  };

  return (
    <ModalContext.Provider
      value={{ isModalOpen, modalType, modalData, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};
