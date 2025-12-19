import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoReparaYa from "../../assets/logoReparaYa.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("correo");
    navigate("/");
  };

  return (
    <header className="w-full bg-[rgb(77,177,187)] shadow-md fixed z-50">
      <nav className="flex items-center justify-between h-16 px-6 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/inicio" className="flex items-center text-white">
          <img src={logoReparaYa} alt="Logo ReparaYa" className="h-10 w-auto" />
        </Link>

        {/* Menú escritorio */}
        <div className="hidden md:flex items-center gap-6 text-white">
          <Link to="/inicio" className="hover:text-gray-200 transition">
            Inicio
          </Link>
          <Link to="/tecnicos" className="hover:text-gray-200 transition">
            Técnicos
          </Link>
          <Link to="/perfil" className="hover:text-gray-200 transition">
            Perfil
          </Link>
          <Link to="/promociones" className="hover:text-gray-200 transition">
            Promociones
          </Link>
          <Link to="/historial" className="hover:text-gray-200 transition">
            Historial
          </Link>
        </div>

        {/* SALIR */}
        <div className="hidden md:block">
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition cursor-pointer"
          >
            Cerrar sesión
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none text-2xl"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden bg-[rgb(77,177,187)] text-white px-6 py-4 space-y-3">
          <Link
            to="/inicio"
            className="block hover:text-gray-200 transition"
            onClick={() => setIsOpen(false)}
          >
            Inicio
          </Link>
          <Link
            to="/tecnicos"
            className="block hover:text-gray-200 transition"
            onClick={() => setIsOpen(false)}
          >
            Técnicos
          </Link>
          <Link
            to="/perfil"
            className="block hover:text-gray-200 transition"
            onClick={() => setIsOpen(false)}
          >
            Perfil
          </Link>
          <Link
            to="/promociones"
            className="block hover:text-gray-200 transition"
            onClick={() => setIsOpen(false)}
          >
            Promociones
          </Link>
          <button
            onClick={() => {
              handleLogout();
              setIsOpen(false);
            }}
            className="w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Cerrar sesión
          </button>
        </div>
      )}
    </header>
  );
}
