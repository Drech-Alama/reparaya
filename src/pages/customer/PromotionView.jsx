import { useEffect, useState } from "react";
import ClientHeader from "../../components/ClientHeader";
import PromotionCard from "../../components/PromotionCard";

export default function PromotionView() {
  const [promotions, setPromotions] = useState([]);
  const user = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("promotions")) || [];
    setPromotions(stored);
  }, []);

  return (
    <>
      {/* <ClientHeader user={user} /> */}

      <div className="max-w-7xl mx-auto p-6 pt-24 md:pt-28">
        <h1 className="text-2xl font-bold mb-6">
          Promociones disponibles
        </h1>

        {promotions.length === 0 ? (
          <p className="text-gray-500">
            No hay promociones disponibles
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {promotions.map((promo) => (
              <PromotionCard
                key={promo.id}
                promo={promo}
              />
            ))}
          </div>
        )}
      </div>
      
    </>
  );
}
