import { useNavigate } from "react-router-dom";
import { Wrench, User } from "lucide-react";

export default function RoleSelector() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-black px-4">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-md w-full shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-white mb-2">
          Selecciona tu rol
        </h2>
        <p className="text-center text-gray-300 mb-8">
          Elige cómo deseas ingresar
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* CLIENTE */}
          <button
            onClick={() => navigate("/inicio")}
            className="group flex flex-col items-center justify-center gap-3 py-6 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 text-white font-semibold shadow-lg transition transform hover:-translate-y-1 hover:shadow-pink-500/50"
          >
            <User size={36} className="group-hover:scale-110 transition" />
            Cliente
          </button>

          {/* TÉCNICO */}
          <button
            onClick={() => navigate("/tecnicos")}
            className="group flex flex-col items-center justify-center gap-3 py-6 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-semibold shadow-lg transition transform hover:-translate-y-1 hover:shadow-cyan-500/50"
          >
            <Wrench size={36} className="group-hover:rotate-12 transition" />
            Técnico
          </button>
        </div>
      </div>
    </div>
  );
}
