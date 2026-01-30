import { useEffect, useState } from "react";
import TechnicianCard from "../../components/TechnicianCard";

export default function TechniciansList() {
  const [technicians, setTechnicians] = useState([]);

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("technicians")) || [];
    setTechnicians(data);
  }, []);

  return (
    <div className="p-6 grid gap-4 md:grid-cols-2">
      {technicians.length === 0 && (
        <p>No hay técnicos registrados aún</p>
      )}

      {technicians.map((tech, i) => (
        <TechnicianCard key={i} tech={tech} />
      ))}
    </div>
  );
}