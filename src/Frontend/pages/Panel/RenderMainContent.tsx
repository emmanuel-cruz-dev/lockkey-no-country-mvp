import Addresses from "../../components/Addresses/Addresses";
import BankAccounts from "../../components/BankAccounts/BankAccounts";
import PasswordsVault from "../../components/PasswordsVault/PasswordsVault";
import PaymentCards from "../../components/PaymentCards/PaymentCards";
import SharingCenter from "../../components/SharingCenter/SharingCenter";
import MainContent from "./MainContent";

const RenderMainContent = (activeButton: string) => {
  switch (activeButton) {
    case "Centro de uso compartido":
      return <SharingCenter />;
    case "Contraseñas":
      return <PasswordsVault />;
    case "Notas":
      return null;
    case "Direcciones":
      return <Addresses />;
    case "Tarjetas de pago":
      return <PaymentCards />;
    case "Cuentas bancarias":
      return <BankAccounts />;
    default:
      return <MainContent />;
  }
};

export default RenderMainContent;
