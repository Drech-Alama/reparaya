import { useEffect, useState } from "react";
import PromotionCard from "../../components/PromotionCard";

export default function PromotionView() {
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("promotions")) || [];
    setPromotions(stored);
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Promociones</h1>

      {promotions.length === 0 ? (
        <p className="text-gray-500">No hay promociones disponibles</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {promotions.map((promo) => (
            <PromotionCard
              key={promo.id}
              promo={promo}
              onClick={() => alert(promo.title)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
