import { useState } from "react";
import { ArrowLeft, Pencil } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FormEditPlan({ role = "cliente" }) {
  const navigate = useNavigate();

  const [preview, setPreview] = useState(null);

  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    phone: "",
    country: "",
    department: "",
    district: "",
    specialty: "",
    company: "",
    agree: false,
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "file") {
      const file = files[0];
      setFormData((prev) => ({ ...prev, photo: file }));

      if (file) {
        setPreview(URL.createObjectURL(file));
      }
    } else if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!formData.agree) {
      alert("Debes aceptar la privacidad y uso de datos");
      return;
    }

    console.log("Datos del formulario:", formData);

    // 👉 aquí luego conectas:
    // - API
    // - pago de plan
    // - actualización de perfil

    navigate("/checkout"); // o la ruta que quieras
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 pt-20 md:pt-24">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded shadow-md w-full max-w-lg"
      >
        {/* VOLVER */}
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-[var(--color-principal)] mb-4 transition cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver
        </button>

        <h2 className="text-2xl mb-6 text-center text-[var(--color-principal)] font-bold">
          Registro {role === "cliente" ? "Cliente" : "Técnico"}
        </h2>

        <div className="flex flex-col items-center gap-3">
          {/* FOTO */}
          <div className="mb-3">
            <label className="block mb-1 text-center text-gray-500">
              Foto (opcional)
            </label>

            <div className="relative w-32 h-32">
              <input
                type="file"
                name="photo"
                accept="image/*"
                onChange={handleChange}
                id="photoInput"
                className="hidden"
              />

              {preview ? (
                <img
                  src={preview}
                  alt="Previsualización"
                  className="w-32 h-32 object-cover rounded-full border border-gray-300"
                />
              ) : (
                <div className="w-32 h-32 flex items-center justify-center bg-gray-100 rounded-full border border-gray-300 text-gray-400 text-sm">
                  Subir foto
                </div>
              )}

              <label
                htmlFor="photoInput"
                className="absolute bottom-1 right-1 bg-[var(--color-principal)] p-1.5 rounded-full cursor-pointer hover:bg-[var(--color-principal-hover)] transition"
              >
                <Pencil className="w-4 h-4 text-white" />
              </label>
            </div>
          </div>

          {/* DATOS PERSONALES */}
          <div className="border border-gray-200 p-5 mb-3 w-full">
            <div className="flex flex-col md:flex-row md:gap-5">
              <input
                type="text"
                placeholder="Nombres y apellidos"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full mb-3 p-2 border border-gray-300 rounded"
                required
              />

              <input
                type="text"
                placeholder="Nombre de usuario"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full mb-3 p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <input
              type="email"
              placeholder="Correo"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mb-3 p-2 border border-gray-300 rounded"
              required
            />

            <input
              type="password"
              placeholder="Contraseña"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mb-3 p-2 border border-gray-300 rounded"
              required
            />

            <input
              type="tel"
              placeholder="Teléfono"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full mb-3 p-2 border border-gray-300 rounded"
              required
            />
          </div>
        </div>

        {/* UBICACIÓN */}
        <div className="flex flex-col md:flex-row md:gap-5 border border-gray-200 p-5 mb-3">
          <input
            type="text"
            placeholder="País"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full mb-3 p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            placeholder="Departamento"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full mb-3 p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            placeholder="Distrito"
            name="district"
            value={formData.district}
            onChange={handleChange}
            className="w-full mb-3 p-2 border border-gray-300 rounded"
            required
          />
        </div>

        {/* DATOS TÉCNICO */}
        {role === "tecnico" && (
          <div className="flex flex-col md:flex-row md:gap-5 border border-gray-200 p-5 mb-3">
            <input
              type="text"
              placeholder="Especialidad"
              name="specialty"
              value={formData.specialty}
              onChange={handleChange}
              className="w-full mb-3 p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              placeholder="Empresa"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full mb-3 p-2 border border-gray-300 rounded"
              required
            />
          </div>
        )}

        {/* TÉRMINOS */}
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="mr-2"
          />
          <label>Acepto la privacidad y uso de datos</label>
        </div>

        {/* BOTÓN */}
        <button
          type="submit"
          className="w-full bg-[var(--color-principal)] text-white p-2 rounded hover:bg-[var(--color-principal-hover)] transition"
        >
          Pagar Plan
        </button>
      </form>
    </div>
  );
}
