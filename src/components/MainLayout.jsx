import { Outlet } from "react-router-dom";
import ClientHeader from "../components/ClientHeader";
import TechnicianHeader from "../components/TechnicianHeader";

export default function MainLayout() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  // Vistas públicas → sin header
  if (!user) return <Outlet />;

  return (
    <>
      {user.role === "tecnico" ? (
        <TechnicianHeader user={user} />
      ) : (
        <ClientHeader user={user} />
      )}
      <Outlet />
    </>
  );
}
