import { useModal } from "../../Store/ModalContext";
import ImportPasswordModal from "../ImportPassword/ImportPassword";
import NotesModal from "../NotesModal/NotesModal";
import PasswordModal from "../PasswordModal/PasswordModal";

function ModalContainer() {
  const { isModalOpen, modalType, closeModal } = useModal();

  return (
    <>
      {isModalOpen && modalType === "password" && (
        <PasswordModal isOpen={isModalOpen} onClose={closeModal} />
      )}
      {isModalOpen && modalType === "notes" && (
        <NotesModal isOpen={isModalOpen} onClose={closeModal} />
      )}
      {isModalOpen && modalType === "importPassword" && (
        <ImportPasswordModal isOpen={isModalOpen} onClose={closeModal} />
      )}
    </>
  );
}

export default ModalContainer;
