// src/pages/Workshop.jsx
import { useState, useMemo } from "react";
import { Search, MapPin } from "lucide-react";
import WorkshopCard from "../../components/common/WorkshopCard";
import workshops from "../../data/workshops.js";

/**
 * Normaliza texto:
 * - minúsculas
 * - sin tildes
 */
const normalizeText = (text = "") =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

export default function Workshop() {
  const [search, setSearch] = useState("");

  const filteredWorkshops = useMemo(() => {
    const query = normalizeText(search);

    return workshops.filter((workshop) => {
      const company = normalizeText(workshop.companyName);
      const technician = normalizeText(workshop.technicianName);
      const address = normalizeText(workshop.address);

      return (
        company.includes(query) ||
        technician.includes(query) ||
        address.includes(query)
      );
    });
  }, [search]);

  return (
    <section className="min-h-screen bg-gray-100 px-4 py-10 pt-24">
      <div className="w-full max-w-6xl mx-auto space-y-8">
        {/* HEADER */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center bg-[rgb(77,177,187)] text-white p-3 rounded-xl">
            <MapPin size={22} />
          </div>

          <h2 className="text-3xl font-bold text-gray-800">
            Talleres disponibles
          </h2>

          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            Encuentra talleres y técnicos por nombre, ubicación o dirección.
          </p>
        </div>

        {/* BUSCADOR */}
        <div className="max-w-xl mx-auto">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por taller, técnico o dirección..."
              className="w-full bg-white border border-gray-300 rounded-xl pl-11 pr-4 py-3 shadow-sm focus:ring-2 focus:ring-[rgb(77,177,187)] outline-none"
            />
          </div>
        </div>

        {/* RESULTADOS */}
        {filteredWorkshops.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            ❌ No se encontraron talleres con ese criterio.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
            {filteredWorkshops.map((workshop) => (
              <WorkshopCard
                key={workshop.id}
                image={workshop.image}
                companyName={workshop.companyName}
                technicianName={workshop.technicianName}
                address={workshop.address}
                rating={workshop.rating}
                mapUrl={workshop.mapUrl}
              />
            ))}
          </div>
        )}

        {/* INFO EXTRA */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
          <p className="text-sm text-gray-600">
            💡 Tip: puedes buscar usando solo una parte del nombre o dirección.
          </p>
        </div>
      </div>
    </section>
  );
}
