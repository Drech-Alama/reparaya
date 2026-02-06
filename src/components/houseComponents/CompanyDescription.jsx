import { useEffect, useState } from "react";
import { Pencil } from "lucide-react";

const STORAGE_KEY = "house_company_description";

export default function CompanyDescription({ companyKey }) {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const isTecnico = user?.role === "tecnico";

  const STORAGE_KEY = `${companyKey}_description`;

  const [title, setTitle] = useState("Expertos en dispositivos");
  const [description, setDescription] = useState(
    "Nos dedicamos a ofrecer servicios de reparación de celulares rápidos, confiables y con garantía, asegurando que tu dispositivo recupere su rendimiento óptimo. Nuestro equipo de técnicos certificados utiliza repuestos originales."
  );

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved) {
      setTitle(saved.title);
      setDescription(saved.description);
    }
  }, [STORAGE_KEY]);

  useEffect(() => {
    if (!isTecnico) return;
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ title, description })
    );
  }, [title, description, isTecnico, STORAGE_KEY]);


  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="bg-white rounded-2xl shadow-lg p-10 md:p-16 text-center">
        {isTecnico ? (
          <>
            {/* TÍTULO */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full text-3xl md:text-4xl font-bold text-center
                           bg-transparent outline-none
                           border-b-2 border-black cursor-text"
              />
              <Pencil size={20} className="text-gray-700" />
            </div>

            {/* DESCRIPCIÓN */}
            <div className="flex items-start justify-center gap-3">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className="w-full text-lg text-center text-gray-600
                           bg-transparent outline-none resize-none
                           border-b-2 border-black cursor-text"
              />
              <Pencil size={16} className="text-gray-700 mt-2" />
            </div>
          </>
        ) : (
          <>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {description}
            </p>
          </>
        )}
      </div>
    </section>
  );
}
