import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [step, setStep] = useState("role"); // role o form
  const [role, setRole] = useState(null); // cliente o tecnico
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

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (name === "photo") {
      const file = files[0];
      setFormData({ ...formData, photo: file });
      setPreview(file ? URL.createObjectURL(file) : null);
    } else {
      setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("Debes aceptar la privacidad y uso de datos");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (formData.photo) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const photoBase64 = reader.result;
        users.push({ ...formData, role, photo: photoBase64 });
        localStorage.setItem("users", JSON.stringify(users));
        navigate("/payment", { state: { role } });
      };
      reader.readAsDataURL(formData.photo);
    } else {
      users.push({ ...formData, role, photo: null });
      localStorage.setItem("users", JSON.stringify(users));
      navigate("/payment", { state: { role } });
    }
  };

  // Modal para elegir rol
  if (step === "role") {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h2 className="text-2xl font-bold mb-6">Selecciona tu rol</h2>
        <div className="flex space-x-4">
          <button
            onClick={() => {
              setRole("cliente");
              setStep("form");
            }}
            className="bg-green-500 text-white p-3 rounded hover:bg-green-600"
          >
            Cliente
          </button>
          <button
            onClick={() => {
              setRole("tecnico");
              setStep("form");
            }}
            className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600"
          >
            Técnico
          </button>
        </div>
      </div>
    );
  }

  // Formulario según rol
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded shadow-md w-full max-w-lg"
      >
        <h2 className="text-2xl mb-6 text-center font-bold">
          Registro {role === "cliente" ? "Cliente" : "Técnico"}
        </h2>

        <input type="text" placeholder="Nombres y apellidos" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full mb-3 p-2 border rounded" required />
        <input type="text" placeholder="Nombre de usuario" name="username" value={formData.username} onChange={handleChange} className="w-full mb-3 p-2 border rounded" required />
        <input type="email" placeholder="Correo" name="email" value={formData.email} onChange={handleChange} className="w-full mb-3 p-2 border rounded" required />
        <input type="password" placeholder="Contraseña" name="password" value={formData.password} onChange={handleChange} className="w-full mb-3 p-2 border rounded" required />
        <input type="tel" placeholder="Teléfono" name="phone" value={formData.phone} onChange={handleChange} className="w-full mb-3 p-2 border rounded" required />
        <input type="text" placeholder="País" name="country" value={formData.country} onChange={handleChange} className="w-full mb-3 p-2 border rounded" required />
        <input type="text" placeholder="Departamento" name="department" value={formData.department} onChange={handleChange} className="w-full mb-3 p-2 border rounded" required />
        <input type="text" placeholder="Distrito" name="district" value={formData.district} onChange={handleChange} className="w-full mb-3 p-2 border rounded" required />

        {role === "tecnico" && (
          <>
            <input type="text" placeholder="Especialidad" name="specialty" value={formData.specialty} onChange={handleChange} className="w-full mb-3 p-2 border rounded" required />
            <input type="text" placeholder="Empresa" name="company" value={formData.company} onChange={handleChange} className="w-full mb-3 p-2 border rounded" required />
          </>
        )}

        {/* Foto opcional */}
        <div className="mb-3">
          <label className="block mb-1">Foto (opcional)</label>
          <input type="file" name="photo" onChange={handleChange} accept="image/*" />
          {preview && <img src={preview} alt="Previsualización" className="mt-2 w-32 h-32 object-cover rounded border" />}
        </div>

        <div className="flex items-center mb-4">
          <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} className="mr-2" />
          <label>Acepto la privacidad y uso de datos</label>
        </div>

        <button className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
          Pagar Plan
        </button>
      </form>
    </div>
  );
}
