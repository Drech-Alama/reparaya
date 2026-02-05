export default function TechnicianCard({ tech, onClick }) {
  if (!tech) return null;

  // Siempre mostrar un mapa válido aunque no haya uno real
  const mapSrc =
    tech.mapUrl && tech.mapUrl.includes("/maps/embed") 
      ? tech.mapUrl 
      : "https://maps.google.com/maps?q=12.059624,-77.035212&z=15&output=embed";

  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white p-4 rounded shadow hover:scale-105 transition"
    >
      <img
        src={tech.image || "/placeholder-tech.png"}
        alt={tech.company || "Técnico"}
        className="w-full h-40 object-cover rounded mb-3"
      />

      <h3 className="font-bold text-lg">{tech.company || "Empresa sin nombre"}</h3>

      <p className="text-sm text-gray-600">
        Técnico: {tech.technicianName || "No especificado"}
      </p>

      <p className="text-sm text-gray-500">
        {tech.address || "Dirección no registrada"}
      </p>

      <iframe
        src={mapSrc}
        className="w-full h-40 mt-3 rounded"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
