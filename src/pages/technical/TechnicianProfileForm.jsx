import { User, Mail, CreditCard, Pencil, Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

export default function TechnicianProfileForm() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-3xl bg-gray-100 rounded-2xl p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* AVATAR IZQUIERDA */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative">
              <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                {preview ? (
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User size={40} className="text-gray-500" />
                )}
              </div>

              {/* BOTÓN EDITAR */}
              <button
                type="button"
                onClick={() => fileInputRef.current.click()}
                className="absolute bottom-1 right-1 bg-[rgb(77,177,187)] text-white p-2 rounded-full shadow hover:scale-105 transition"
              >
                <Pencil size={16} />
              </button>

              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden"
              />
            </div>

            <span className="mt-3 text-sm text-gray-500">
              Perfil del Técnico
            </span>
          </div>

          {/* FORM DERECHA */}
          <form className="flex-1 space-y-4">
            {/* Nombre y usuario */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre y apellido
                </label>
                <input
                  type="text"
                  placeholder="Ej. Carlos Ramírez"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[rgb(77,177,187)] outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre de usuario
                </label>
                <input
                  type="text"
                  placeholder="ej. tecnicarlos"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[rgb(77,177,187)] outline-none"
                />
              </div>
            </div>

            {/* Correo */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Correo electrónico
              </label>
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="email"
                  placeholder="correo@tecnico.com"
                  className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 focus:ring-2 focus:ring-[rgb(77,177,187)] outline-none"
                />
              </div>
            </div>

            {/* DATOS PROFESIONALES */}
            <div className="border border-gray-300 rounded-xl p-4 bg-gray-100 space-y-3">
              <h3 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <Briefcase size={16} />
                Información profesional
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Especialidad
                  </label>
                  <input
                    type="text"
                    placeholder="Electricista, Plomero, Técnico PC"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[rgb(77,177,187)] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Empresa / Independiente
                  </label>
                  <input
                    type="text"
                    placeholder="Nombre de empresa o Independiente"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[rgb(77,177,187)] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    placeholder="+51 999 999 999"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[rgb(77,177,187)] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Zona de trabajo
                  </label>
                  <input
                    type="text"
                    placeholder="Lima Metropolitana"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[rgb(77,177,187)] outline-none"
                  />
                </div>
              </div>
            </div>

            {/* PRIVACIDAD */}
            <div className="border border-gray-300 rounded-xl p-4 bg-gray-100 space-y-2">
              <h3 className="text-sm font-semibold text-gray-700">
                Privacidad y uso de datos
              </h3>

              <label className="flex items-start gap-3 text-sm text-gray-600">
                <input
                  type="checkbox"
                  className="mt-1 rounded border-gray-300 text-[rgb(77,177,187)] focus:ring-[rgb(77,177,187)]"
                />
                <span>
                  Autorizo el uso de mis datos para mostrar mi perfil a clientes
                  y gestionar servicios dentro de la plataforma.
                </span>
              </label>
            </div>

            {/* PLAN */}
            <div className="border border-gray-300 rounded-xl p-4 flex items-center justify-between bg-gray-50">
              <div>
                <p className="text-sm font-semibold text-gray-700">
                  Plan del técnico
                </p>
                <p className="text-sm text-gray-500">S/ 4.00 PEN mensual</p>
              </div>

              <button
                type="button"
                onClick={() => navigate("/inicio")}
                className="flex items-center gap-2 bg-[rgb(77,177,187)] text-white px-4 py-2 rounded-lg hover:opacity-90 active:scale-95 transition"
              >
                <CreditCard size={18} />
                Pagar
              </button>
            </div>

            {/* POLÍTICAS */}
            <div className="border-t pt-4 text-center text-xs text-gray-500 space-x-2">
              <a href="#" className="hover:text-[rgb(77,177,187)] transition">
                Términos y condiciones
              </a>
              <span>•</span>
              <a href="#" className="hover:text-[rgb(77,177,187)] transition">
                Política de privacidad
              </a>
              <span>•</span>
              <a href="#" className="hover:text-[rgb(77,177,187)] transition">
                Uso de datos
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
