import { useEffect, useState } from "react";
import ClientHeader from "../../components/ClientHeader";
import TechnicianCard from "../../components/TechnicianCard";

export default function TechniciansList() {
  const [technicians, setTechnicians] = useState([]);
  const user = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("technicians")) || [];
    setTechnicians(data);
  }, []);

  return (
    <>
      {/* HEADER FULL WIDTH */}
      <ClientHeader user={user} />

      {/* CONTENIDO */}
      <div className="max-w-7xl mx-auto p-6 pt-24">
        
        {technicians.length === 0 ? (
          <p className="text-gray-500">
            No hay técnicos registrados aún
          </p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {technicians.map((tech, i) => (
              <TechnicianCard key={i} tech={tech} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
