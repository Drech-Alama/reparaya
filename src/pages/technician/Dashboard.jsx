import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Leer usuario logueado desde localStorage
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
    if (!currentUser.email || currentUser.role !== "tecnico") {
      // Si no hay usuario o no es técnico, redirigir al login
      navigate("/login");
    } else {
      setUser(currentUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  if (!user) {
    return <p className="p-4 text-center">Cargando...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h2 className="text-2xl font-black pb-5">Página de técnico</h2>
      {/* Foto y nombre */}
      {user.photo && (
        <img
          src={user.photo}
          alt="Foto del Técnico"
          className="w-32 h-32 rounded-full object-cover mb-4 border-2 border-gray-300"
        />
      )}
      <h1 className="text-3xl font-bold mb-2">{user.fullName}</h1>
      <p className="text-gray-600 mb-6">{user.email}</p>

      {/* Botón de cerrar sesión */}
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Cerrar sesión
      </button>

      {/* Aquí puedes agregar el resto del dashboard del técnico */}
    </div>
  );
}
