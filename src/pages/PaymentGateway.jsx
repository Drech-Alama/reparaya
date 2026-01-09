import { useState } from "react";
import yapeQR from "/images/qr.png";

export default function PaymentGateway() {
  const [method, setMethod] = useState("yape");

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-center bg-cover"
      style={{ backgroundImage: "url('/images/localGT.webp')" }}
    >
      <div className="absolute inset-0 bg-black/70" />
      {/* CONTENEDOR QUE COMPENSA HEADER */}
      <div className="relative mt-24 w-full max-w-md px-4">
        <div className="bg-white border border-gray-100 shadow-xl rounded-xl p-6">
          <h2 className="text-2xl font-bold text-center mb-6">
            Membresía Mensual
          </h2>

          {/* Selector */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setMethod("yape")}
              className={`flex-1 py-2 rounded-lg font-semibold ${
                method === "yape"
                  ? "bg-[rgb(77,177,187)] text-white"
                  : "bg-gray-100"
              }`}
            >
              Yape
            </button>

            <button
              onClick={() => setMethod("card")}
              className={`flex-1 py-2 rounded-lg font-semibold ${
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

              <p className="font-semibold">Monto: S/ 3.00</p>

              <button className="mt-4 w-full bg-[rgb(77,177,187)] text-white py-2 rounded-lg">
                Pagar
              </button>
            </div>
          )}

          {/* TARJETA */}
          {method === "card" && (
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Número de tarjeta"
                className="w-full border rounded-lg px-3 py-2"
              />

              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="MM/AA"
                  className="w-1/2 border rounded-lg px-3 py-2"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-1/2 border rounded-lg px-3 py-2"
                />
              </div>

              <input
                type="text"
                placeholder="Nombre del titular"
                className="w-full border rounded-lg px-3 py-2"
              />

              <button
                type="button"
                className="w-full bg-[rgb(77,177,187)] text-white py-2 rounded-lg"
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
