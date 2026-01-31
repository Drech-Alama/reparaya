import { useEffect, useState } from "react";
import HistorialCard from "../../components/HistorialCard";
import ClientHeader from "../../components/ClientHeader";

export default function HistorialView() {
  const user = JSON.parse(localStorage.getItem("currentUser")); // 👈 FALTABA ESTO
  const [historial, setHistorial] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("historial")) || [];
    setHistorial(data);
  }, []);

  return (
    <>
      <ClientHeader user={user} />

      <main className="p-6 pt-24">
        <h1 className="text-2xl font-bold mb-6">
          Historial de Mantenimiento
        </h1>

        {historial.length === 0 ? (
          <p>No hay registros aún</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {historial.map((item) => (
              <HistorialCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
