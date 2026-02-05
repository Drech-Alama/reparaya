import { useEffect, useState } from "react";
import { Pencil } from "lucide-react";

const STORAGE_KEY = "house_company_values";

const defaultValues = [
  { id: Date.now(), text: "Atención rápida y personalizada" },
  { id: Date.now() + 1, text: "Técnicos certificados y confiables" },
  { id: Date.now() + 2, text: "Garantía en todos nuestros servicios" },
];

export default function CompanyValues() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const isTecnico = user?.role === "tecnico";

  const [values, setValues] = useState(defaultValues);

  /* 🔹 Cargar */
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved) setValues(saved);
  }, []);

  /* 🔹 Guardar */
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
  }, [values]);

  const addValue = () => {
    setValues([
      ...values,
      { id: Date.now(), text: "Nuevo valor de la empresa" },
    ]);
  };

  const deleteValue = (id) => {
    setValues(values.filter((v) => v.id !== id));
  };

  const updateValue = (id, text) => {
    setValues(
      values.map((v) => (v.id === id ? { ...v, text } : v))
    );
  };

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-12">
          ¿Por qué elegirnos?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((item) => (
            <div
              key={item.id}
              className="relative bg-white rounded-xl shadow p-14 text-center"
            >
              {isTecnico ? (
                <>
                  {/* TEXTO EDITABLE */}
                  <div className="flex items-start justify-center gap-3">
                    <textarea
                      value={item.text}
                      onChange={(e) =>
                        updateValue(item.id, e.target.value)
                      }
                      rows={2}
                      className="w-full text-center text-lg font-medium
                                 bg-transparent outline-none resize-none
                                 border-b-2 border-gray-300
                                 cursor-text"
                    />
                    <Pencil
                      size={16}
                      className="text-gray-700 mt-1 pointer-events-none"
                    />
                  </div>

                  {/* BORRAR */}
                  <button
                    onClick={() => deleteValue(item.id)}
                    className="absolute top-2 right-2 px-2 py-1 rounded bg-red-600 text-white text-sm"
                  >
                    Borrar
                  </button>
                </>
              ) : (
                <p className="text-lg font-medium text-gray-700">
                  {item.text}
                </p>
              )}
            </div>
          ))}
        </div>

        {isTecnico && (
          <div className="flex justify-center mt-10">
            <button
              onClick={addValue}
              className="px-6 py-3 bg-[var(--color-principal)]  text-white rounded-lg hover:bg-[var(--color-principal-hover)] cursor-pointer"
            >
              + Agregar valor
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
