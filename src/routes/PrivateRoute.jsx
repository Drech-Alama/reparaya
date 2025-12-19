import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const isAuth = localStorage.getItem("auth");

  return isAuth ? <Outlet /> : <Navigate to="/" replace />;
}
