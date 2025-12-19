// src/components/LocalInfo.jsx
import React from "react";

export default function LocalInfo({ local }) {
  const { name, technician, address, mapUrl, companyName } = local;

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8 space-y-6 mt-10">
      <h2 className="text-3xl font-bold text-gray-800">{companyName}</h2>

      <div>
        <p className="text-gray-500 font-medium">Técnico a cargo:</p>
        <p className="text-gray-800">{technician}</p>
      </div>

      <div>
        <p className="text-gray-500 font-medium">Dirección:</p>
        <p className="text-gray-800">{address}</p>
      </div>

      <div className="rounded-lg overflow-hidden shadow-md">
        {mapUrl ? (
          <iframe
            src={mapUrl}
            width="100%"
            height="300"
            className="border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        ) : (
          <p className="text-center text-gray-500 py-12">Mapa no disponible</p>
        )}
      </div>
    </div>
  );
}
