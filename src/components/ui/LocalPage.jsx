// src/pages/LocalPage.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LocalInfo from "../../components/ui/LocalInfo.jsx";

export default function LocalPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { local } = location.state || {}; // Recibe info del card

  if (!local)
    return (
      <p className="text-center mt-10">No se encontró información del local.</p>
    );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <button
        onClick={() => navigate(-1)} // Volver a Workshop
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        ← Volver
      </button>
      <LocalInfo local={local} />
    </div>
  );
}
