import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import qr from "../../assets/images/qr.png";

export default function Payment() {
  const navigate = useNavigate();
  const location = useLocation();
  const role = location.state?.role || "cliente";

  const [method, setMethod] = useState(null); // "qr" | "card"

  const handleConfirmPayment = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const lastUser = users[users.length - 1];
    if (!lastUser) return;

    const currentUser = {
      fullName: lastUser.fullName,
      username: lastUser.username,
      email: lastUser.email,
      role: lastUser.role,
    };

    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    if (role === "cliente") navigate("/home");
    if (role === "tecnico") navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-2 text-center">
          Pago del Plan - {role}
        </h2>
        <p className="text-center text-gray-500 mb-4">
          Elige un método de pago
        </p>

        {/* BOTONES */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setMethod("qr")}
            className={`flex-1 p-2 rounded ${
              method === "qr"
                ? "bg-[var(--color-principal)] text-white"
                : "bg-gray-200"
            }`}
          >
            Pagar con QR
          </button>

          <button
            onClick={() => setMethod("card")}
            className={`flex-1 p-2 rounded ${
              method === "card"
                ? "bg-[var(--color-principal)] text-white"
                : "bg-gray-200"
            }`}
          >
            Tarjeta
          </button>
        </div>

        {/* QR */}
        {method === "qr" && (
          <div className="text-center">
            <img
              src={qr}
              alt="QR de pago"
              className="h-56 mx-auto mb-4"
            />
            <button
              onClick={handleConfirmPayment}
              className="w-full bg-[var(--color-principal)] text-white p-2 rounded hover:bg-[var(--color-principal-hover)]"
            >
              Ya pagué
            </button>
          </div>
        )}

        {/* FORMULARIO TARJETA */}
        {method === "card" && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleConfirmPayment();
            }}
            className="space-y-3"
          >
            <input
              type="text"
              placeholder="Nombre en la tarjeta"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="text"
              placeholder="Número de tarjeta"
              className="w-full p-2 border rounded"
              required
            />
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="MM/AA"
                className="w-1/2 p-2 border rounded"
                required
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-1/2 p-2 border rounded"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[var(--color-principal)] text-white p-2 rounded hover:bg-[var(--color-principal-hover)]"
            >
              Pagar con tarjeta
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
