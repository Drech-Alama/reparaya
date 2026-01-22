import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SplashScreen from "./components/layout/SplashScreen";
import PaymentGateway from "./components/ui/PaymentGateway";

import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import Home from "./pages/customer/Home.jsx";
import Workshop from "./pages/customer/Workshop.jsx";
import MainLayout from "./components/layout/MainLayout.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import Promotion from "./pages/customer/Promotion.jsx";
import RepairHistory from "./pages/customer/RepairHistory.jsx";
import LocalPage from "./components/ui/LocalPage.jsx";
import NotFound from "./components/ui/NotFound.jsx";
import RoleSelector from "./components/ui/RoleSelector.jsx";
import PaymentGatewayTech from "./components/ui/PaymentGatewayTech.jsx";
import ClientProfileForm from "./pages/customer/ClientProfileForm.jsx";
import TechnicianProfileForm from "./pages/technical/TechnicianProfileForm.jsx";
import TechnicianProfile from "./pages/technical/TechnicianProfile.jsx";
import ClientProfile from "./pages/customer/ClientProfile.jsx";
import TechnicianHome from "./pages/technical/TechnicianHome.jsx";
import ServicesTechnician from "./pages/technical/ServicesTechnician.jsx";
import PromotionTechnician from "./pages/technical/PromotionTechnician.jsx";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}

      {!showSplash && (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/rol-usuario" element={<RoleSelector />} />
          <Route path="/pago" element={<PaymentGateway />} />
          <Route path="/formulario-cliente" element={<ClientProfileForm />} />
          <Route
            path="/formulario-tecnico"
            element={<TechnicianProfileForm />}
          />
          <Route path="/inicio-tecnico" element={<TechnicianHome />} />
          <Route path="/pago-tecnico" element={<PaymentGatewayTech />} />
          <Route path="/tecnico-perfil" element={<TechnicianProfile />} />
          <Route path="/servicios-tecnico" element={<ServicesTechnician />} />
          <Route
            path="/promociones-tecnico"
            element={<PromotionTechnician />}
          />

          <Route element={<PrivateRoute />}>
            <Route element={<MainLayout />}>
              <Route path="/inicio" element={<Home />} />
              <Route path="/tecnicos" element={<Workshop />} />
              <Route path="/perfil" element={<ClientProfile />} />
              <Route path="/promociones" element={<Promotion />} />
              <Route path="/historial" element={<RepairHistory />} />
              <Route path="/local-info" element={<LocalPage />} />
              <Route path="/role-selector" element={<RoleSelector />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
