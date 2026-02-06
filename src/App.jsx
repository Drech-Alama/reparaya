import { Routes, Route } from "react-router-dom";
import { useState } from "react";

// Tus imports
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import PrivateRoute from "./pages/auth/PrivateRoute";
import Payment from "./components/paymet/Payment";
import Home from "./pages/customer/Home";
import Dashboard from "./pages/technician/Dashboard";
import FrontPage from "./pages/web/FrontPage";
import PromotionView from "./pages/customer/PromotionView";
import TechnicianView from "./pages/customer/TechnicianView";
import HistorialView from "./pages/customer/HistorialView";
import FormEditPlan from "./components/FormEditPlan";
import MainLayout from "./components/MainLayout";
import HouseGtphone from "./pages/houses/HouseGtphone";
import HouseSolucionesmc from "./pages/houses/HouseSolucionesmc";
import HouseIlucas from "./pages/houses/HouseIlucas";
import SplashScreen from "./components/SplashScreen";

function App() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {!splashDone && <SplashScreen onFinish={() => setSplashDone(true)} />}

      {splashDone && (
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
            <Route path="/editar-plan" element={<FormEditPlan />} />
            <Route path="/tienda/gtphone" element={<HouseGtphone />} />
            <Route path="/tienda/ilucas" element={<HouseIlucas />} />
            <Route path="/tienda/solucionesmc" element={<HouseSolucionesmc />} />
          </Route>

          {/* Técnicos protegidos + header */}
          <Route element={<PrivateRoute allowedRoles={["tecnico"]} />}>
            <Route element={<MainLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Route>

          <Route path="*" element={<FrontPage />} />
        </Routes>
      )}
    </>
  );
}

export default App;
