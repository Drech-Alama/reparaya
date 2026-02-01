import { useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/images/slider1.webp"; // tu imagen en src/assets/

export default function FrontPage() {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center p-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Fondo semi-transparente */}
      <div className="bg-black/50 backdrop-blur-md p-8 rounded-md text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Bienvenido a nuestra plataforma ReparaYa
        </h1>
        <p className="text-white text-lg mb-8 max-w-xl mx-auto">
          Aquí podrás registrarte como cliente o técnico, administrar tus datos y acceder a tus servicios de forma sencilla.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button
            onClick={() => navigate("/login")}
            className="bg-[var(--color-principal)] text-white font-semibold px-6 py-3 rounded shadow-lg hover:bg-[var(--color-principal-hover)] transition cursor-pointer"
          >
            Iniciar Sesión
          </button>
          <button
            onClick={() => navigate("/register")}
            className="bg-[var(--color-blanco)] text-[var(--color-principal)] font-semibold px-6 py-3 rounded shadow-lg hover:bg-[var(--color-principal-hover)] hover:text-white transition cursor-pointer"
          >
            Crear Cuenta
          </button>
        </div>
      </div>
    </div>
  );
}
