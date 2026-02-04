import { Routes, Route } from "react-router-dom";

// Auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import PrivateRoute from "./pages/auth/PrivateRoute";

// Payment
import Payment from "./components/paymet/Payment";

// Cliente
import Home from "./pages/customer/Home";

// Técnico
import Dashboard from "./pages/technician/Dashboard";

// Vista pública
import FrontPage from "./pages/web/FrontPage";
import PromotionView from "./pages/customer/PromotionView";
import TechnicianView from "./pages/customer/TechnicianView";
import HistorialView from "./pages/customer/HistorialView";
import CompanyView from "./pages/viewCompany/CompanyView";
import FormEditPlan from "./components/FormEditPlan";
import MainLayout from "./components/MainLayout";



function App() {
  return (
    <Routes>

      {/* Públicas SIN header */}
      <Route path="/" element={<FrontPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/payment" element={<Payment />} />

      {/* Rutas con header según rol */}
      <Route element={<MainLayout />}>
        <Route path="/inicio" element={<Home />} />
        <Route path="/tecnicos" element={<TechnicianView />} />
        <Route path="/promociones" element={<PromotionView />} />
        <Route path="/historial" element={<HistorialView />} />
        <Route path="/empresa/:company" element={<CompanyView />} />
        <Route path="/editar-plan" element={<FormEditPlan />} />
      </Route>

      {/* Técnicos protegidos + header */}
      <Route element={<PrivateRoute allowedRoles={["tecnico"]} />}>
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Route>

      <Route path="*" element={<FrontPage />} />
    </Routes>
  );
}

export default App;
