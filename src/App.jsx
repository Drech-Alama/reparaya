import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import Home from "./pages/home/Home.jsx";
import Workshop from "./pages/workshop/Workshop.jsx";
import Profile from "./pages/profile/Profile.jsx";

import MainLayout from "./components/layout/MainLayout.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import Promotion from "./pages/promotion/Promotion.jsx";
import RepairHistory from "./pages/repairhistory/RepairHistory.jsx";
import LocalPage from "./pages/localpage/LocalPage.jsx";
import NotFound from "./pages/notfound/NotFound.jsx";

function App() {
  return (
    <Routes>
      {/* Rutas públicas (SIN header) */}
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Rutas privadas */}
      <Route element={<PrivateRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/inicio" element={<Home />} />
          <Route path="/tecnicos" element={<Workshop />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/promociones" element={<Promotion />} />
          <Route path="/historial" element={<RepairHistory />} />
          <Route path="/local-info" element={<LocalPage />} />
          {/* RUTA CATCH-ALL */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
