import { Megaphone, PlusCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function TechnicianHome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
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
            onClick={() => navigate("/tecnico/promocionar")}
            className="flex items-center gap-2 bg-[rgb(77,177,187)] text-white px-6 py-3 rounded-xl hover:opacity-90 active:scale-95 transition"
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
              onClick={() => navigate("/tecnico/servicios")}
              className="text-sm text-[rgb(77,177,187)] font-medium hover:underline"
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
              onClick={() => navigate("/tecnico/perfil")}
              className="text-sm text-[rgb(77,177,187)] font-medium hover:underline"
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
              onClick={() => navigate("/tecnico/promocionar")}
              className="inline-flex items-center gap-2 text-sm text-[rgb(77,177,187)] font-medium hover:underline"
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
            hasta <span className="font-semibold">3x más solicitudes</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
