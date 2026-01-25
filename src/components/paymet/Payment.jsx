import { useNavigate, useLocation } from "react-router-dom";

export default function Payment() {
  const navigate = useNavigate();
  const location = useLocation();
  const role = location.state?.role || "cliente";

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Pago del Plan - {role}</h2>
      <div className="bg-white p-6 rounded shadow-md w-96 text-center">
        <p className="mb-4">Escanea el QR o paga con tarjeta</p>
        <div className="bg-gray-200 h-64 mb-4 flex items-center justify-center">
          <span className="text-gray-500">[QR / Tarjeta aquí]</span>
        </div>
        <button
          onClick={() => {
            if (role === "cliente") navigate("/home", { state: { role } });
            else if (role === "tecnico") navigate("/dashboard", { state: { role } });
          }}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Confirmar Pago
        </button>
      </div>
    </div>
  );
}
