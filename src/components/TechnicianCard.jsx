import { Phone } from "lucide-react";

export default function TechnicianCard({ tech }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
      {/* IMAGEN GRANDE */}
      <div className="md:w-1/3 w-full h-60 md:h-auto">
        <img
          src={tech.image}
          alt={tech.company}
          className="w-full h-full object-cover"
        />
      </div>

      {/* INFO */}
      <div className="flex-1 p-5 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold">{tech.company}</h3>

          <p className="text-gray-600 mt-1">
            Técnico: <span className="font-medium">{tech.technicianName}</span>
          </p>

          <p className="text-sm text-gray-500 mt-2">
            📍 {tech.address}
          </p>
        </div>

        <a
          href={`https://wa.me/${tech.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center gap-2 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
        >
          <Phone size={18} />
          Contactar por WhatsApp
        </a>
      </div>
    </div>
  );
}
