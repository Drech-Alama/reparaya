import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    nombres: "",
    apellidos: "",
    celular: "",
    correo: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    console.log("SUBMIT REGISTER", form); // 👈 AÑADE ESTO

    const formData = new FormData();
    formData.append("action", "register");
    formData.append("nombres", form.nombres);
    formData.append("apellidos", form.apellidos);
    formData.append("celular", form.celular);
    formData.append("correo", form.correo);
    formData.append("password", form.password);

    await fetch(
      "https://script.google.com/macros/s/AKfycbzke6J2C_WLAlccx3lVQBt5vo2U5ItMaWxFys7ww5OKi3_cCA6S_jscBMNdUvHt38QW/exec",
      {
        method: "POST",
        mode: "no-cors",
        body: formData,
      }
    );

    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white w-full max-w-md p-6 rounded-2xl shadow-xl space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Crear cuenta
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            placeholder="Nombres"
            onChange={(e) => setForm({ ...form, nombres: e.target.value })}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            placeholder="Apellidos"
            onChange={(e) => setForm({ ...form, apellidos: e.target.value })}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <input
          type="tel"
          placeholder="Celular"
          onChange={(e) => setForm({ ...form, celular: e.target.value })}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          type="email"
          placeholder="Correo"
          onChange={(e) => setForm({ ...form, correo: e.target.value })}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl shadow-md transition hover:scale-[1.02]"
        >
          Registrarme
        </button>

        <p className="text-center text-sm text-gray-600">
          ¿Ya tienes cuenta?{" "}
          <Link to="/" className="text-green-600 hover:underline">
            Iniciar sesión
          </Link>
        </p>
      </form>
    </div>
  );
}
