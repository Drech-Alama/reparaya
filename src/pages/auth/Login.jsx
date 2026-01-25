import { useState } from "react";
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
        <h2 className="text-2xl mb-6 text-center font-bold">Login</h2>

        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
          required
        />

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Iniciar sesión
        </button>

        <p className="mt-4 text-center text-sm">
          ¿No tienes cuenta?{" "}
          <span
            className="text-green-500 cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Crear cuenta
          </span>
        </p>
      </form>
    </div>
  );
}
