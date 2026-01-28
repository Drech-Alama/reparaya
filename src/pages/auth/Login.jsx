import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((u) => u.email === email);

    if (!user) {
      setError("Usuario no registrado");
      return;
    }
    if (user.password !== password) {
      setError("Contraseña incorrecta");
      return;
    }

    // Guardar usuario logueado en localStorage para persistencia
    localStorage.setItem("currentUser", JSON.stringify(user));

    // Redirigir según rol
    if (user.role === "cliente") navigate("/home");
    else if (user.role === "tecnico") navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded shadow-md w-96"
      >
        <button
          type="button"
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-[var(--color-principal)] mb-4 cursor-pointer"
        >
          <ArrowLeft size={18} />
          Volver
        </button>
        <h2 className="text-2xl mb-6 text-center font-bold">Login</h2>
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          required
        />

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <button className="w-full bg-[var(--color-principal)] text-white p-2 rounded hover:bg-[var(--color-principal-hover)]">
          Iniciar sesión
        </button>

        <p className="mt-4 text-center text-sm">
          ¿No tienes cuenta?{" "}
          <span
            className="text-[var(--color-principal)] hover:text-[var(--color-principal-hover)] underline  cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Crear cuenta
          </span>
        </p>
      </form>
    </div>
  );
}
