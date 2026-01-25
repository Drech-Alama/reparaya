import { Routes, Route } from "react-router-dom";

// Auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// Payment
import Payment from "./components/paymet/Payment";

// Cliente
import Home from "./pages/customer/Home";

// Técnico
import Dashboard from "./pages/technician/Dashboard";

// Vista pública
import FrontPage from "./pages/web/FrontPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Ruta catch-all: cualquier URL no definida redirige al inicio */}
      <Route path="*" element={<FrontPage />} />
    </Routes>
  );
}

export default App;
