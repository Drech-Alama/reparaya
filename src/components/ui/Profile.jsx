import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate(); // Hook de React Router

  const goToHistory = () => {
    navigate("/historial"); // Redirige al componente RepairHistory
  };

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-10 flex justify-center pt-26">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-md p-6">
        {/* Título */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Mi Perfil</h1>

        {/* Datos */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src="../../images/usuario.webp"
                alt="Foto de usuario"
                className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
              />
              {/* Botón editar */}
              <button
                className="absolute bottom-0 right-0 bg-blue-600 text-white p-1 rounded-full border border-white hover:bg-blue-700 transition"
                onClick={() => alert("Editar foto")}
              >
                <FaEdit size={12} />
              </button>
            </div>
            <div>
              <p className="text-sm text-gray-500">Nombre</p>
              <p className="text-gray-800 font-medium">Juan Pérez</p>
            </div>
          </div>

          {/* Correo */}
          <div>
            <p className="text-sm text-gray-500">Correo</p>
            <p className="text-gray-800 font-medium">juan.perez@email.com</p>
          </div>

          {/* Dirección */}
          <div>
            <p className="text-sm text-gray-500">Dirección</p>
            <p className="text-gray-800 font-medium">
              Av. Los Olivos 123, Lima
            </p>
          </div>

          {/* Fecha de nacimiento */}
          <div>
            <p className="text-sm text-gray-500">Fecha de nacimiento</p>
            <p className="text-gray-800 font-medium">12 / 05 / 1998</p>
          </div>

          {/* Número de celular */}
          <div>
            <p className="text-sm text-gray-500">Número de celular</p>
            <p className="text-gray-800 font-medium">+51 987 654 321</p>
          </div>

          {/* Descripción */}
          <div>
            <p className="text-sm text-gray-500">Descripción</p>
            <p className="text-gray-700">
              Usuario frecuente de servicios de reparación y mantenimiento
              técnico.
            </p>
          </div>
        </div>

        {/* Botón */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={goToHistory}
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Historial de Reparación
          </button>
        </div>
      </div>
    </section>
  );
}
