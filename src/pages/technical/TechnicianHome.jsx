import { Megaphone, PlusCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function TechnicianHome() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("correo");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 pt-24">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* HERO */}
        <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Bienvenido, Técnico 👋
            </h1>
            <p className="text-gray-600 mt-2 max-w-md">
              Publica y promociona tus servicios para llegar a más clientes
              cerca de tu zona.
            </p>
          </div>

          <button
            onClick={() => navigate("/pago-tecnico")}
            className="flex items-center gap-2 bg-[rgb(77,177,187)] text-white px-6 py-3 rounded-xl hover:opacity-90 active:scale-95 transition cursor-pointer"
          >
            <Megaphone size={20} />
            Promociona tu servicio
          </button>
        </div>

        {/* ACCIONES RÁPIDAS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-700 mb-2">Mis servicios</h3>
            <p className="text-sm text-gray-500 mb-4">
              Administra los servicios que ofreces.
            </p>
            <button
              onClick={() => navigate("/servicios-tecnico")}
              className="text-sm text-[rgb(77,177,187)] font-medium hover:underline cursor-pointer"
            >
              Ver servicios →
            </button>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-700 mb-2">Mi perfil</h3>
            <p className="text-sm text-gray-500 mb-4">
              Actualiza tu información y datos profesionales.
            </p>
            <button
              onClick={() => navigate("/tecnico-perfil")}
              className="text-sm text-[rgb(77,177,187)] font-medium hover:underline cursor-pointer"
            >
              Editar perfil →
            </button>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-700 mb-2">
              Nueva promoción
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Destaca tu servicio por más tiempo.
            </p>
            <button
              onClick={() => navigate("/promociones-tecnico")}
              className="inline-flex items-center gap-2 text-sm text-[rgb(77,177,187)] font-medium hover:underline cursor-pointer"
            >
              <PlusCircle size={16} />
              Crear promoción
            </button>
          </div>
        </div>

        {/* BLOQUE INFORMATIVO */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
          <p className="text-sm text-gray-600">
            💡 Los técnicos con perfil completo y promociones activas reciben
            hasta <span className="font-semibold">más solicitudes</span>.
          </p>
        </div>
        <button
          onClick={() => {
            handleLogout();
            setIsOpen(false);
          }}
          className="w-full px-4 py-2 mt-6 border border-[rgb(77,177,187)] hover:bg-[rgb(77,177,187)] font-semibold text-black rounded-lg transition cursor-pointer"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}
