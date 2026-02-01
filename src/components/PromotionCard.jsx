import { useNavigate } from "react-router-dom";

export default function PromotionCard({ promo }) {
  const navigate = useNavigate();

  const handleClick = () => {
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
        src={promo.image}
        alt={promo.title}
        className="w-full h-40 object-cover rounded"
      />

      <h3 className="font-bold mt-2">{promo.title}</h3>
      <p className="text-sm text-gray-500">{promo.company}</p>
    </div>
  );
}
