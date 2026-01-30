import { Tag } from "lucide-react";

export default function PromotionCard({ promo, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition"
    >
      {/* IMAGEN */}
      <div className="h-48 w-full">
        <img
          src={promo.image}
          alt={promo.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENIDO */}
      <div className="p-4">
        <div className="flex items-center gap-2 text-[var(--color-principal)] mb-2">
          <Tag size={18} />
          <h3 className="font-bold text-lg">{promo.title}</h3>
        </div>

        <p className="text-gray-600 text-sm line-clamp-3">
          {promo.description}
        </p>
      </div>
    </div>
  );
}
