import { useState } from "react";
import { Building, User, MapPin, Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function ServicesTechnician() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: "",
    technicianName: "",
    address: "",
    photo: null,
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        photo: file,
      }));
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Formulario enviado!");
    navigate("/inicio-tecnico");
  };

  return (
    <div className="max-w-lg mx-auto mt-30 p-6 shadow-2xl bg-white rounded-2xl">
      <h2 className="text-3xl font-bold text-[rgb(77,177,187)] mb-8 text-center">
        Registrar Técnico
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nombre de la empresa */}
        <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-sky-400 transition">
          <Building className="text-gray-400 w-5 h-5 mr-3" />
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Nombre de la empresa"
            className="w-full outline-none text-gray-700 placeholder-gray-400"
            required
          />
        </div>

        {/* Nombre del técnico */}
        <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-sky-400 transition">
          <User className="text-gray-400 w-5 h-5 mr-3" />
          <input
            type="text"
            name="technicianName"
            value={formData.technicianName}
            onChange={handleChange}
            placeholder="Nombre del técnico"
            className="w-full outline-none text-gray-700 placeholder-gray-400"
            required
          />
        </div>

        {/* Dirección */}
        <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-sky-400 transition">
          <MapPin className="text-gray-400 w-5 h-5 mr-3" />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Dirección"
            className="w-full outline-none text-gray-700 placeholder-gray-400"
            required
          />
        </div>

        {/* Foto del local */}
        <div>
          <label className="flex items-center font-semibold mb-2 text-gray-700">
            <Camera className="mr-2 w-5 h-5" />
            Foto del local
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="w-full mb-4 cursor-pointer border border-gray-300 rounded-lg p-2"
          />
          {preview && (
            <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-md border border-gray-200">
              <img
                src={preview}
                alt="Previsualización"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => {
                  setPreview(null);
                  setFormData((prev) => ({ ...prev, photo: null }));
                }}
                className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:bg-red-100 transition"
              >
                ✕
              </button>
            </div>
          )}
        </div>

        {/* Botón enviar */}
        <div className="flex space-x-4">
          <button
            type="submit"
            className="flex-1 py-3 bg-[rgb(77,177,187)] hover:bg-[rgb(55,137,147)] text-white font-bold rounded-xl shadow-md transition cursor-pointer"
          >
            Guardar
          </button>

          <button
            type="button"
            onClick={() => navigate("/inicio-tecnico")}
            className="flex-1 py-3 bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold rounded-xl shadow-md transition cursor-pointer"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
