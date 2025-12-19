import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({
    correo: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const formData = new FormData();
      formData.append("action", "login");
      formData.append("correo", form.correo);
      formData.append("password", form.password);

      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbzke6J2C_WLAlccx3lVQBt5vo2U5ItMaWxFys7ww5OKi3_cCA6S_jscBMNdUvHt38QW/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("auth", "true");
        localStorage.setItem("correo", form.correo);
        navigate("/inicio");
      } else {
        setError("Correo o contraseña incorrectos");
      }
    } catch (err) {
      setError("Error de conexión");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white w-full max-w-sm p-6 rounded-2xl shadow-xl space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Iniciar sesión
        </h2>

        <input
          type="email"
          placeholder="Correo"
          onChange={(e) => setForm({ ...form, correo: e.target.value })}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {error && <p className="text-sm text-red-500 text-center">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-md transition hover:scale-[1.02]"
        >
          Ingresar
        </button>

        <p className="text-center text-sm text-gray-600">
          ¿No tienes cuenta?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Crear cuenta
          </Link>
        </p>
      </form>
    </div>
  );
}
