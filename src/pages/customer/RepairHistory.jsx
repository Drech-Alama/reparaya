// RepairHistory.jsx
import React from "react";

const repairData = [
  {
    id: 1,
    date: "2025-12-01",
    location: "Taller Central",
    problem: "Cambio de pantalla",
    paid: true,
  },
  {
    id: 2,
    date: "2025-11-15",
    location: "Taller Norte",
    problem: "Batería no carga",
    paid: false,
  },
  {
    id: 3,
    date: "2025-10-28",
    location: "Taller Sur",
    problem: "Problema con altavoz",
    paid: true,
  },
  // Agrega más registros si quieres
];

export default function RepairHistory() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Repair History
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Fecha de Reparación</th>
              <th className="py-3 px-6 text-left">Lugar de Reparación</th>
              <th className="py-3 px-6 text-left">Problema Técnico</th>
              <th className="py-3 px-6 text-left">Pagado</th>
            </tr>
          </thead>
          <tbody>
            {repairData.map((item, index) => (
              <tr
                key={item.id}
                className={`transition-colors duration-200 ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } hover:bg-blue-100`}
              >
                <td className="py-3 px-6">{item.date}</td>
                <td className="py-3 px-6">{item.location}</td>
                <td className="py-3 px-6">{item.problem}</td>
                <td
                  className={`py-3 px-6 font-semibold ${
                    item.paid ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {item.paid ? "Sí" : "No"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
