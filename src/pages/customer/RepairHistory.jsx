import { Wrench, CheckCircle, XCircle } from "lucide-react";

const repairData = [
  {
    id: 1,
    date: "01/12/2025",
    location: "Taller Central",
    problem: "Cambio de pantalla",
    paid: true,
  },
  {
    id: 2,
    date: "15/11/2025",
    location: "Taller Norte",
    problem: "Batería no carga",
    paid: false,
  },
  {
    id: 3,
    date: "28/10/2025",
    location: "Taller Sur",
    problem: "Problema con altavoz",
    paid: true,
  },
  {
    id: 4,
    date: "20/01/2026",
    location: "Taller Sur",
    problem: "Problema con altavoz",
    paid: true,
  },
];

export default function RepairHistory() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 pt-24">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* HEADER */}
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="bg-[rgb(77,177,187)] p-3 rounded-xl text-white">
            <Wrench size={24} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Historial de Reparaciones
            </h2>
            <p className="text-sm text-gray-500">
              Revisa todas tus reparaciones realizadas
            </p>
          </div>
        </div>

        {/* TABLA DESKTOP */}
        <div className="hidden md:block bg-white rounded-2xl shadow-sm overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-[rgb(77,177,187)]">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                  Fecha
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                  Taller
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                  Problema
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                  Estado
                </th>
              </tr>
            </thead>
            <tbody>
              {repairData.map((item, index) => (
                <tr
                  key={item.id}
                  className="border-b last:border-none hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {item.date}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {item.location}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {item.problem}
                  </td>
                  <td className="px-6 py-4">
                    {item.paid ? (
                      <span className="inline-flex items-center gap-2 text-xs font-medium bg-green-100 text-green-700 px-3 py-1 rounded-full">
                        <CheckCircle size={14} />
                        Pagado
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-xs font-medium bg-red-100 text-red-700 px-3 py-1 rounded-full">
                        <XCircle size={14} />
                        Pendiente
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CARDS MOBILE */}
        <div className="md:hidden space-y-4">
          {repairData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-4 shadow-sm space-y-2"
            >
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-gray-700">
                  {item.problem}
                </span>
                {item.paid ? (
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    Pagado
                  </span>
                ) : (
                  <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">
                    Pendiente
                  </span>
                )}
              </div>

              <p className="text-xs text-gray-500">📅 {item.date}</p>
              <p className="text-xs text-gray-500">📍 {item.location}</p>
            </div>
          ))}
        </div>

        {/* FOOTER INFO */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
          <p className="text-sm text-gray-600">
            ℹ️ Si tienes alguna duda sobre una reparación, puedes contactar al
            taller correspondiente desde la sección de soporte.
          </p>
        </div>
      </div>
    </div>
  );
}
