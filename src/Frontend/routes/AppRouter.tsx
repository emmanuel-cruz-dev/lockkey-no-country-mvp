import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import ContactPage from "./ContactPage";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Panel from "../pages/Panel/Panel";

function AppRouter() {
  // const isAuthenticated = !!localStorage.getItem("access_token"); // Agregar esta línea al finalizar
  const isAuthenticated = true; // Borrar esta línea

  return (
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
  );
}

export default AppRouter;
