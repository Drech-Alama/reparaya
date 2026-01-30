import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  Wrench,
  CalendarDays,
  ClipboardList,
  LogOut,
} from "lucide-react";
import logo from "../assets/images/logoReparaYa.png";

export default function TechnicianHeader({ user }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  const links = [
    { to: "/dashboard", label: "Inicio", icon: Home },
    { to: "/servicios", label: "Servicios", icon: Wrench },
    { to: "/agenda", label: "Agenda", icon: CalendarDays },
    { to: "/historial", label: "Historial", icon: ClipboardList },
  ];

  return (
    <header className="w-full bg-[var(--color-principal)] text-white shadow">
      {/* CONTENEDOR */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-3">
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
                isActive ? "underline" : "hover:opacity-80"
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* PERFIL + LOGOUT (DESKTOP) */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2">
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

          <button
            onClick={handleLogout}
            className="flex items-center gap-1 bg-[var(--color-principal-hover)] px-3 py-1.5 rounded hover:bg-white hover:text-[var(--color-principal)] text-sm shadow-sm transition cursor-pointer"
          >
            <LogOut size={16} />
            Salir
          </button>
        </div>

        {/* BOTÓN HAMBURGUESA (MOBILE) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
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
                className="flex items-center gap-3 py-2 hover:bg-white/10 rounded"
              >
                <Icon size={18} />
                {label}
              </NavLink>
            ))}

            {/* PERFIL */}
            <div className="flex items-center gap-3 mt-3 border-t border-white/20 pt-3">
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
              className="mt-3 flex items-center gap-2 bg-[var(--color-principal-hover)] px-3 py-2 rounded hover:bg-white hover:text-[var(--color-principal)] shadow-sm text-sm transition cursor-pointer"
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
