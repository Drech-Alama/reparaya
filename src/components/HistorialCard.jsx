export default function HistorialCard({ item }) {
  if (!item) return null;

  return (
    <div className="bg-white rounded shadow p-4 border">
      <p className="font-bold">
        📅 {item.date || "Fecha"}
      </p>

      <p className="mt-1">
        🏢 <strong>Taller:</strong> {item.workshop || "-"}
      </p>

      <p className="mt-1">
        📱 <strong>Problema:</strong> {item.problem || "-"}
      </p>

      <p className="mt-1">
        ⚙️ <strong>Estado:</strong>{" "}
        <span className="text-blue-600">
          {item.status || "Pendiente"}
        </span>
      </p>
    </div>
  );
}
