import { useNavigate } from "react-router-dom";

export default function TechnicianCard({ tech }) {
  const navigate = useNavigate();

  if (!tech) return null;

  const handleClick = () => {
    if (!tech.company) return;

    const slug = tech.company
      .trim()
      .replace(/\s+/g, "-")
      .toLowerCase();

    navigate(`/tecnico/${slug}`);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer bg-white p-4 rounded shadow hover:scale-105 transition"
    >
      {/* IMAGEN */}
      <img
        src={tech.image || "/placeholder-tech.png"}
        alt={tech.company || "Técnico"}
        className="w-full h-40 object-cover rounded mb-3"
      />

      {/* EMPRESA */}
      <h3 className="font-bold text-lg">
        {tech.company || "Empresa sin nombre"}
      </h3>

      {/* TÉCNICO */}
      <p className="text-sm text-gray-600">
        Técnico: {tech.technicianName || "No especificado"}
      </p>

      {/* DIRECCIÓN */}
      <p className="text-sm text-gray-500">
        {tech.address || "Dirección no registrada"}
      </p>

      {/* MAPA */}
      {tech.mapUrl && tech.mapUrl.includes("/maps/embed") && (
        <iframe
          src={tech.mapUrl}
          className="w-full h-40 mt-3 rounded"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      )}

    </div>
  );
}
