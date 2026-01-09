// LocalInfo.jsx
import React from "react";

export default function LocalInfo({ local }) {
  const { companyName, technicianName, address, mapUrl } = local;
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8 space-y-6">
      {/* Nombre del local */}
      <h2 className="text-3xl font-bold text-gray-800">{companyName}</h2>

      {/* Técnico */}
      <div>
        <p className="text-gray-500 font-medium">Técnico a cargo:</p>
        <p className="text-gray-800">{technicianName}</p>
      </div>

      {/* Dirección */}
      <div>
        <p className="text-gray-500 font-medium">Dirección:</p>
        <p className="text-gray-800">{address}</p>
      </div>
      {/* WhasApp */}
      <div>
        <p className="text-gray-500 font-medium">WhatsApp:</p>

        <a
          href="https://wa.me/51922477983?text=Necesito%20su%20servicio%20t%C3%A9cnico"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 my-2 rounded-lg transition"
        >
          Escríbenos
        </a>
      </div>

      {/* Mapa */}
      <div className="rounded-lg overflow-hidden shadow-md">
        {mapUrl ? (
          <iframe
            src={mapUrl}
            width="100%"
            height="300"
            className="border-0"
            loading="lazy"
          />
        ) : (
          <p className="text-gray-500 text-center">Mapa no disponible</p>
        )}
      </div>
    </div>
  );
}
