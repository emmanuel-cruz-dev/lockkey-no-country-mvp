import "./App.css";
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import { ModalProvider } from "./providers/ModalProvider";
import ModalContainer from "./components/ModalContainer/ModalContainer";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <ModalProvider>
      <Header />
      <AppRouter />
      <ScrollToTopButton />
      <Footer />
      <ModalContainer />
    </ModalProvider>
  );
}

// function App() {
//   return <Footer />;
// }
export default App;
