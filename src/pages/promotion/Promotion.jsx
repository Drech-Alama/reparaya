import PromotionCard from "../../components/common/PromotionCard";

export default function Promotion() {
  const promotions = [
    {
      id: 1,
      title: "Descuento especial",
      description: "Aprovecha nuestra promoción limitada",
      image: "./images/promo1.webp",
      to: "/promocion/especial",
    },
    {
      id: 2,
      title: "Nuevo producto",
      description: "Descubre nuestra nueva colección",
      image: "./images/promo2.webp",
      to: "/promocion/nuevo-producto",
    },
    {
      id: 3,
      title: "Nuevo producto",
      description: "Descubre nuestra nueva colección",
      image: "./images/promo3.webp",
      to: "/promocion/nuevo-producto",
    },
  ];

  return (
    <div className="md:pt-20 p-6 pt-26">
      <h1 className="text-2xl font-bold mb-8 text-center">
        Talleres disponibles
      </h1>

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
    </div>
  );
}
