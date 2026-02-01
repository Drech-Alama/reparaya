import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  Tag,
  Wrench,
  History,
  LogOut,
} from "lucide-react";
import logo from "../assets/images/logoReparaYa.png";

export default function ClientHeader({ user }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  // 👉 FOTO TOLERANTE A DISTINTOS NOMBRES
  const photo =
    user?.photo ||
    user?.avatar ||
    user?.image ||
    user?.foto ||
    "/images/avatar-default.png"; // avatar por defecto

  const links = [
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

        {/* PERFIL + LOGOUT DESKTOP */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img
              src={photo}
              alt="Perfil"
              className="w-9 h-9 rounded-full object-cover border border-white"
            />
            <span className="font-semibold text-sm">
              Hola, {user?.fullName || user?.username || user?.email}
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

        {/* BOTÓN HAMBURGUESA */}
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

            {/* PERFIL MOBILE */}
            <div className="flex items-center gap-3 mt-3 border-t border-white/20 pt-3">
              <img
                src={photo}
                alt="Perfil"
                className="w-9 h-9 rounded-full object-cover border border-white"
              />
              <span className="text-sm font-semibold">
                Hola, {user?.fullName || user?.username || user?.email}
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
