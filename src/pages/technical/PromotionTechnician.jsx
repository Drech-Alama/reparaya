import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Image, Tag, AlignLeft } from "lucide-react";

export default function PromotionTechnician() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Promoción registrada!");
    navigate("/inicio-tecnico"); // Redirige a tu ruta de promociones
  };

  return (
    <div className="max-w-lg mx-auto mt-12 p-6 bg-white shadow-xl rounded-2xl">
      <h2 className="text-3xl font-bold text-[rgb(77,177,187)] mb-8 text-center">
        Registrar Promoción
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Título */}
        <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-sky-400 transition">
          <Tag className="text-gray-400 w-5 h-5 mr-3" />
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Título de la promoción"
            className="w-full outline-none text-gray-700 placeholder-gray-400"
            required
          />
        </div>

        {/* Descripción */}
        <div className="flex items-start border border-gray-300 rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-sky-400 transition">
          <AlignLeft className="text-gray-400 w-5 h-5 mr-3 mt-1" />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Descripción de la promoción"
            className="w-full outline-none text-gray-700 placeholder-gray-400 resize-none"
            rows={4}
            required
          />
        </div>

        {/* Imagen */}
        <div>
          <label className="flex items-center font-semibold mb-2 text-gray-700">
            <Image className="mr-2 w-5 h-5" />
            Imagen de la promoción
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
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
                  setFormData((prev) => ({ ...prev, image: null }));
                }}
                className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:bg-red-100 transition"
              >
                ✕
              </button>
            </div>
          )}
        </div>

        {/* Botones */}
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
