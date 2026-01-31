export default function PromotionCard({ promo }) {
  return (
    <div
      onClick={() => {
        console.log("Promo clickeada:", promo);
      }}
      className="bg-white rounded-xl shadow-md overflow-hidden
        cursor-pointer transition hover:shadow-xl hover:scale-[1.01]"
    >
      <img
        src={promo.image}
        alt={promo.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="font-bold text-lg">{promo.title}</h3>

        <p className="text-gray-600 text-sm mt-2">
          {promo.description}
        </p>
      </div>
    </div>
  );
}
