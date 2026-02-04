import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  Wrench,
  LogOut,
  Tag,
  History,
} from "lucide-react";
import logo from "../assets/images/logoReparaYa.png";

export default function TechnicianHeader() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  const links = [
    { to: "/dashboard", label: "Dashboard", icon: Home },
    { to: "/inicio", label: "Inicio", icon: Home },
    { to: "/promociones", label: "Promociones", icon: Tag },
    { to: "/tecnicos", label: "Técnicos", icon: Wrench },
    { to: "/historial", label: "Historial", icon: History },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-[var(--color-principal)] text-white shadow z-50">
      {/* CONTENEDOR */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* LOGO */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate("/dashboard")}
        >
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex gap-6 font-medium">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive
                  ? "underline underline-offset-4"
                  : "hover:opacity-80"
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* PERFIL + LOGOUT DESKTOP */}
        <div className="hidden md:flex items-center gap-4">
          {/* PERFIL */}
          <div
            onClick={() => navigate("/editar-plan")}
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition"
          >
            {user?.photo && (
              <img
                src={user.photo}
                alt="Perfil"
                className="w-9 h-9 rounded-full object-cover border"
              />
            )}
            <span className="font-semibold text-sm">
              👨‍🔧 {user?.fullName || user?.username || user?.email}
            </span>
          </div>

          {/* LOGOUT */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-1 bg-[var(--color-principal-hover)] px-3 py-1.5 rounded hover:bg-white hover:text-[var(--color-principal)] text-sm shadow-sm transition"
          >
            <LogOut size={16} />
            Salir
          </button>
        </div>

        {/* HAMBURGUESA */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MENÚ MOBILE */}
      {open && (
        <div className="md:hidden bg-[var(--color-principal)] border-t border-white/20">
          <nav className="flex flex-col px-4 py-3 gap-3">
            {links.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 py-2 rounded ${
                    isActive ? "bg-white/20" : "hover:bg-white/10"
                  }`
                }
              >
                <Icon size={18} />
                {label}
              </NavLink>
            ))}

            {/* PERFIL MOBILE */}
            <div
              onClick={() => {
                navigate("/editar-plan");
                setOpen(false);
              }}
              className="flex items-center gap-3 mt-3 border-t border-white/20 pt-3 cursor-pointer hover:opacity-80 transition"
            >
              {user?.photo && (
                <img
                  src={user.photo}
                  alt="Perfil"
                  className="w-9 h-9 rounded-full object-cover border"
                />
              )}
              <span className="text-sm font-semibold">
                👨‍🔧 {user?.fullName || user?.username || user?.email}
              </span>
            </div>

            {/* LOGOUT MOBILE */}
            <button
              onClick={handleLogout}
              className="mt-3 flex items-center gap-2 bg-[var(--color-principal-hover)] px-3 py-2 rounded hover:bg-white hover:text-[var(--color-principal)] shadow-sm text-sm transition"
            >
              <LogOut size={18} />
              Cerrar sesión
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
