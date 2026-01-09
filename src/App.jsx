import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SplashScreen from "./pages/splashscreen/SplashScreen";
import PaymentGateway from "./pages/PaymentGateway";

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
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}

      {!showSplash && (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route element={<PrivateRoute />}>
            <Route element={<MainLayout />}>
              <Route path="/inicio" element={<Home />} />
              <Route path="/tecnicos" element={<Workshop />} />
              <Route path="/perfil" element={<Profile />} />
              <Route path="/promociones" element={<Promotion />} />
              <Route path="/historial" element={<RepairHistory />} />
              <Route path="/local-info" element={<LocalPage />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/pago" element={<PaymentGateway />} />
            </Route>
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
