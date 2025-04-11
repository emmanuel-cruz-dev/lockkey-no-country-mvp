import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import { ModalProvider } from "./providers/ModalProvider";
import Home from "./routes/Home";
import About from "./routes/About";
import Services from "./routes/Services";
import ContactPage from "./routes/ContactPage";
import ModalContainer from "./components/ModalContainer/ModalContainer";

const Register = lazy(() => import("./pages/Register/Register"));
const Login = lazy(() => import("./pages/Login/Login"));
const Panel = lazy(() => import("./pages/Panel/Panel"));

function App() {
  //const isAuthenticated = !!localStorage.getItem("access_token"); // Agregar esta línea al finalizar
  const isAuthenticated = true; // No olvidar borrar esta línea

  return (
    <ModalProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/panel"
          element={isAuthenticated ? <Panel /> : <Navigate to="/login" />}
        />
      </Routes>
      <ScrollToTopButton />
      <Footer />

      <ModalContainer />
    </ModalProvider>
  );
}

export default App;
