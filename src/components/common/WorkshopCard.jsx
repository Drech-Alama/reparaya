// src/components/common/WorkshopCard.jsx
import { Link } from "react-router-dom";

export default function WorkshopCard({
  image,
  companyName,
  technicianName,
  address,
  rating,
  mapUrl,
}) {
  const localData = {
    image,
    companyName,
    technicianName,
    address,
    rating,
    mapUrl,
  };

  return (
    <Link
      to="/local-info"
      state={{ local: localData }}
      className="block w-full max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
    >
      <img src={image} alt={companyName} className="w-full h-40 object-cover" />
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-bold text-gray-800">{companyName}</h3>
        <p className="text-gray-600">Técnico: {technicianName}</p>
        <p className="text-gray-600">Dirección: {address}</p>
        <p className="text-yellow-500">⭐ {rating}</p>
      </div>
    </Link>
  );
}
