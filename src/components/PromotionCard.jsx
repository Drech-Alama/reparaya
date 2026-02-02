import { useNavigate } from "react-router-dom";

export default function PromotionCard({ promo }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!promo.company) return;

    const slug = promo.company
      .trim()
      .replace(/\s+/g, "-")
      .toLowerCase();

    navigate(`/empresa/${slug}`);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer bg-white rounded shadow p-4 hover:scale-105 transition"
    >
      <img
        src={promo.image || "/placeholder-promo.png"}
        alt={promo.title}
        className="w-full h-40 object-cover rounded"
      />

      <h3 className="font-bold mt-2 text-lg">
        {promo.title || "Título de la promoción"}
      </h3>

      <p className="text-sm text-gray-500">
        {promo.company || "Nombre de la empresa"}
      </p>

      <p className="text-sm mt-2 text-gray-700 break-words">
        {promo.description || "Descripción de la promoción"}
      </p>
    </div>
  );
}
