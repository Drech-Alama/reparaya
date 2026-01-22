// src/pages/Workshop.jsx
import WorkshopCard from "../../components/common/WorkshopCard";
import workshops from "../../data/workshops.js";

export default function Workshop() {
  return (
    <section className="min-h-screen px-6 py-10 flex justify-center pt-26">
      <div className="w-full max-w-6xl">
        <h1 className="text-2xl font-bold mb-8 text-center">
          Talleres disponibles
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {workshops.map((workshop) => (
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
      </div>
    </section>
  );
}
