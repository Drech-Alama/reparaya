import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PromotionCard from "../../components/PromotionCard";

export default function PromotionView() {
  const navigate = useNavigate();
  const [dynamicPromos, setDynamicPromos] = useState([]);

  // ================= PROMOCIONES ESTÁTICAS =================
  const staticPromos = [
    {
      id: "s1",
      title: "GT Phone",
      company: "GT Phone Service",
      description: "Reparación y accesorios",
      image: "/assets/images/localGT.webp",
      link: "/tienda/gtphone",
    },
    {
      id: "s2",
      title: "Soluciones MC",
      company: "Soluciones MC",
      description: "Tecnología y soporte",
      image: "/assets/images/localGT.webp",
      link: "/tienda/solucionesmc",
    },
    {
      id: "s3",
      title: "ILucas",
      company: "ILucas",
      description: "Soluciones digitales",
      image: "/assets/images/localGT.webp",
      link: "/tienda/ilucas",
    },
  ];

  // ================= CARGAR PROMOCIONES DINÁMICAS =================
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("promotions")) || [];
    setDynamicPromos(stored);
  }, []);

  // ================= FUNCIONES DE CLICK =================
  const handleStaticClick = (promo) => {
    navigate(promo.link); // siempre va a /tienda/...
  };

  const handleDynamicClick = (promo) => {
    if (promo.whatsapp) {
      // Si tiene whatsapp, abre chat
      const message = `Hola, estoy interesado en esta promoción: ${promo.title}`;
      window.open(`https://wa.me/${promo.whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
    } else if (promo.company) {
      // Si no, va a /empresa/:company
      const slug = promo.company.trim().replace(/\s+/g, "-").toLowerCase();
      navigate(`/empresa/${slug}`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 pt-24 md:pt-28">
      <h1 className="text-2xl font-bold mb-6">Promociones disponibles</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* ================= CARDS ESTÁTICAS ================= */}
        {staticPromos.map((promo) => (
          <PromotionCard
            key={promo.id}
            promo={promo}
            onClick={() => handleStaticClick(promo)}
          />
        ))}

        {/* ================= CARDS DINÁMICAS ================= */}
        {dynamicPromos.map((promo) => (
          <PromotionCard
            key={promo.id}
            promo={promo}
            onClick={() => handleDynamicClick(promo)}
          />
        ))}
      </div>

      {/* Mensaje si no hay promociones */}
      {staticPromos.length === 0 && dynamicPromos.length === 0 && (
        <p className="text-gray-500 mt-6">No hay promociones disponibles</p>
      )}
    </div>
  );
}
