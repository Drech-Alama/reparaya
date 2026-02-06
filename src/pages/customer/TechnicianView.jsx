import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TechnicianCard from "../../components/TechnicianCard";

// Imagen técnicos
import gtphone from "../../assets/images/localGt.webp";
import solucionesmc from "../../assets/images/localSolucionesmc.webp";
import ilucas from "../../assets/images/localilucas.webp";

export default function TechnicianView() {
  const [technicians, setTechnicians] = useState([]);
  const navigate = useNavigate();

  // ================= CARDS ESTÁTICAS =================
  const staticTechs = [
    {
      id: "t1",
      company: "GT Phone Service",
      technicianName: "Juan Pérez",
      address: "Av. Siempre Viva 123",
      image: gtphone,
      link: "/tienda/gtphone",
      mapUrl: "https://maps.google.com/maps?q=12.059624,-77.035212&z=15&output=embed",
    },
    {
      id: "t2",
      company: "Soluciones MC",
      technicianName: "María Gómez",
      address: "Calle Falsa 456",
      image: solucionesmc,
      link: "/tienda/solucionesmc",
      mapUrl: "https://maps.google.com/maps?q=12.060000,-77.036000&z=15&output=embed",
    },
    {
      id: "t3",
      company: "ILucas",
      technicianName: "Carlos Ruiz",
      address: "Jr. Tecnología 789",
      image: ilucas,
      link: "/tienda/ilucas",
      mapUrl: "https://maps.google.com/maps?q=12.061000,-77.037000&z=15&output=embed",
    },
  ];

  // ================= CARGAR TÉCNICOS DINÁMICOS =================
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("technicians")) || [];
    setTechnicians(stored);
  }, []);

  // ================= CLICK HANDLERS =================
  const handleStaticClick = (tech) => {
    navigate(tech.link);
  };

  const handleDynamicClick = (tech) => {
    if (tech.link) {
      navigate(tech.link);
    } else if (tech.company) {
      const slug = tech.company.trim().replace(/\s+/g, "-").toLowerCase();
      navigate(`/tienda/${slug}`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 pt-24 md:pt-28">
      <h1 className="text-2xl font-bold mb-6">Técnicos disponibles</h1>

      <div className="grid gap-4 md:grid-cols-2">
        {/* ================= CARDS ESTÁTICAS ================= */}
        {staticTechs.map((tech) => (
          <TechnicianCard
            key={tech.id}
            tech={tech}
            onClick={() => handleStaticClick(tech)}
          />
        ))}

        {/* ================= CARDS DINÁMICAS ================= */}
        {technicians.map((tech, i) => (
          <TechnicianCard
            key={i}
            tech={tech}
            onClick={() => handleDynamicClick(tech)}
          />
        ))}
      </div>

      {staticTechs.length === 0 && technicians.length === 0 && (
        <p className="text-gray-500 mt-6">No hay técnicos registrados aún</p>
      )}
    </div>
  );
}
