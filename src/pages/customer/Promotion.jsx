import PromotionCard from "../../components/common/PromotionCard";
import { Megaphone } from "lucide-react";

export default function Promotion() {
  const promotions = [
    {
      id: 1,
      title: "Descuento especial",
      description: "Aprovecha nuestra promoción limitada",
      image: "./images/promo1.webp",
      to: "/tecnicos",
    },
    {
      id: 2,
      title: "Nuevo producto",
      description: "Descubre nuestra nueva colección",
      image: "./images/promo2.webp",
      to: "/tecnicos",
    },
    {
      id: 3,
      title: "Promoción destacada",
      description: "Servicios técnicos con precios especiales",
      image: "./images/promo3.webp",
      to: "/tecnicos",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-4 pt-24">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* HEADER */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center bg-[rgb(77,177,187)] text-white p-3 rounded-xl">
            <Megaphone size={22} />
          </div>

          <h2 className="text-3xl font-bold text-gray-800">
            Promociones disponibles
          </h2>

          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            Explora las mejores promociones y servicios destacados de nuestros
            talleres afiliados.
          </p>
        </div>

        {/* GRID DE PROMOCIONES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {promotions.map((promo) => (
            <PromotionCard
              key={promo.id}
              title={promo.title}
              description={promo.description}
              image={promo.image}
              to={promo.to}
            />
          ))}
        </div>

        {/* INFO EXTRA */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
          <p className="text-sm text-gray-600">
            💡 Las promociones se actualizan constantemente. Vuelve pronto para
            descubrir nuevas ofertas.
          </p>
        </div>
      </div>
    </div>
  );
}
