import { useState } from "react";
import yapeQR from "/images/qr.png";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

export default function PaymentGatewayTech() {
  const [method, setMethod] = useState("yape");
  const navigate = useNavigate();

  return (
    <div
      className="fixed inset-0 bg-center bg-cover"
      style={{ backgroundImage: "url('/images/localGT.webp')" }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* CONTENIDO */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="relative bg-white border border-gray-100 shadow-xl rounded-xl p-6 w-full max-w-md">
          {/* ❌ BOTÓN CERRAR */}
          <button
            onClick={() => navigate("/inicio")}
            className="absolute top-3 right-3 text-gray-400 hover:text-[rgb(77,177,187)] transition"
          >
            <X size={22} />
          </button>

          <h2 className="text-2xl font-bold text-center mb-6">
            Membresía Mensual
          </h2>

          {/* SELECTOR */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setMethod("yape")}
              className={`flex-1 py-2 rounded-lg font-semibold transition ${
                method === "yape"
                  ? "bg-[rgb(77,177,187)] text-white"
                  : "bg-gray-100"
              }`}
            >
              Yape
            </button>

            <button
              onClick={() => setMethod("card")}
              className={`flex-1 py-2 rounded-lg font-semibold transition ${
                method === "card"
                  ? "bg-[rgb(77,177,187)] text-white"
                  : "bg-gray-100"
              }`}
            >
              Tarjeta
            </button>
          </div>

          {/* YAPE */}
          {method === "yape" && (
            <div className="text-center">
              <p className="mb-4 text-gray-600">
                Escanea el QR y realiza el pago
              </p>

              <img src={yapeQR} alt="QR Yape" className="w-48 mx-auto mb-4" />

              <p className="font-semibold mb-2">Monto: S/ 4.00</p>

              <button
                onClick={() => navigate("/inicio-tecnico")}
                className="mt-4 w-full bg-[rgb(77,177,187)] text-white py-2 rounded-lg transition active:scale-95 hover:opacity-90"
              >
                Pagar
              </button>
            </div>
          )}

          {/* TARJETA */}
          {method === "card" && (
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                navigate("/inicio-tecnico");
              }}
            >
              <input
                type="text"
                placeholder="Número de tarjeta"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(77,177,187)]"
              />

              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="MM/AA"
                  className="w-1/2 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(77,177,187)]"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-1/2 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(77,177,187)]"
                />
              </div>

              <input
                type="text"
                placeholder="Nombre del titular"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(77,177,187)]"
              />

              <button
                type="submit"
                className="w-full bg-[rgb(77,177,187)] text-white py-2 rounded-lg transition active:scale-95 hover:opacity-90"
              >
                Pagar
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
