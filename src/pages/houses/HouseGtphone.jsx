import { useEffect, useState } from "react";
import defaultHero from "../../assets/images/localgt.webp";
import CompanyDescription from "../../components/houseComponents/CompanyDescription";
import CompanyValues from "../../components/houseComponents/CompanyValues";
import { Pencil } from "lucide-react";
import WhatsappFloatingButton from "../../components/WhatsappFloatingButton";

// Promociones
import promotionCard1 from "../../assets/images/promo1.webp";
import promotionCard2 from "../../assets/images/promo2.webp";
import promotionCard3 from "../../assets/images/promo3.webp";

// Galería
import galeriaCard1 from "../../assets/images/reparo1.jpg";
import galeriaCard2 from "../../assets/images/reparo2.webp";
import galeriaCard3 from "../../assets/images/reparo3.webp";

/* =====================
   STORAGE KEYS
===================== */
const HERO_KEY = "house_gtphone";
const PROMOS_KEY = "house_gtphone_promotions";
const GALLERY_KEY = "house_gtphone_gallery";

/* =====================
   PROMOS POR DEFECTO
===================== */
const defaultPromotions = [
{
  id: 1,
  title: "Renovación de equipo",
  company: "GT Phone",
  description: "Renueva tu equipo con pantallas originales y garantía incluida",
  whatsapp: "51995669995",
  image: promotionCard2,
},
{
  id: 2,
  title: "Cambio de batería",
  company: "GT Phone",
  description: "Reemplaza tu batería por una de larga duración y rendimiento óptimo",
  whatsapp: "51995669995",
  image: promotionCard1,
},
{
  id: 3,
  title: "Cambio de tapa",
  company: "GT Phone",
  description: "Cambia la tapa de tu equipo con un servicio rápido, seguro y profesional",
  whatsapp: "51995669995",
  image: promotionCard3,
},

];

/* =====================
   GALERÍA POR DEFECTO
===================== */
const defaultGallery = [
  { id: 1, image: galeriaCard1 },
  { id: 2, image: galeriaCard2 },
  { id: 3, image: galeriaCard3 },
];

export default function HouseGtphone() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const isTecnico = user?.role === "tecnico";

  /* =====================
     HERO
  ===================== */
  const [companyName, setCompanyName] = useState("GT Phone");
  const [heroImage, setHeroImage] = useState(defaultHero);

  /* =====================
     PROMOS
  ===================== */
  const [promotions, setPromotions] = useState(defaultPromotions);

  /* =====================
     GALERÍA
  ===================== */
  const [gallery, setGallery] = useState(defaultGallery);

  /* =====================
     LOAD HERO
  ===================== */
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(HERO_KEY));
    if (saved) {
      setCompanyName(saved.companyName || "GT Phone Service");
      setHeroImage(saved.heroImage || defaultHero);
    }
  }, []);

  /* =====================
     SAVE HERO
  ===================== */
  useEffect(() => {
    if (!isTecnico) return;
    localStorage.setItem(
      HERO_KEY,
      JSON.stringify({ companyName, heroImage })
    );
  }, [companyName, heroImage, isTecnico]);

  /* =====================
     LOAD PROMOS
  ===================== */
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(PROMOS_KEY));
    if (saved && saved.length) setPromotions(saved);
  }, []);

  /* =====================
     SAVE PROMOS
  ===================== */
  useEffect(() => {
    if (!isTecnico) return;
    localStorage.setItem(PROMOS_KEY, JSON.stringify(promotions));
  }, [promotions, isTecnico]);

  /* =====================
     LOAD GALLERY
  ===================== */
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(GALLERY_KEY));
    if (saved && saved.length) setGallery(saved);
  }, []);

  /* =====================
     SAVE GALLERY
  ===================== */
  useEffect(() => {
    if (!isTecnico) return;
    localStorage.setItem(GALLERY_KEY, JSON.stringify(gallery));
  }, [gallery, isTecnico]);

  /* =====================
     HELPERS
  ===================== */
  const readImage = (file, callback) => {
    const reader = new FileReader();
    reader.onloadend = () => callback(reader.result);
    reader.readAsDataURL(file);
  };

  /* =====================
     HERO IMAGE
  ===================== */
  const handleHeroImage = (e) => {
    if (!e.target.files[0]) return;
    readImage(e.target.files[0], setHeroImage);
  };

  /* =====================
     PROMOS
  ===================== */
  const handlePromoChange = (i, field, value) => {
    const copy = [...promotions];
    copy[i][field] = value;
    setPromotions(copy);
  };

  const handlePromoImage = (i, file) =>
    readImage(file, (img) => handlePromoChange(i, "image", img));

  const addPromotion = () =>
    setPromotions([
      ...promotions,
      {
        id: Date.now(),
        title: "Nueva promoción",
        company: companyName,
        description: "Descripción",
        whatsapp: "51",
        image: defaultHero,
      },
    ]);

  const deletePromotion = (id) => {
    if (!confirm("¿Eliminar promoción?")) return;
    setPromotions(promotions.filter((p) => p.id !== id));
  };

  const goToWhatsapp = (promo) => {
    const message = `
Hola 👋
Estoy interesado en esta promoción:

📱 ${promo.title}
🏢 ${promo.company}
📝 ${promo.description}
`;
    window.open(
      `https://wa.me/${promo.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  /* =====================
     GALERÍA
  ===================== */
  const addGalleryImage = (file) => {
    readImage(file, (img) =>
      setGallery([...gallery, { id: Date.now(), image: img }])
    );
  };

  const deleteGalleryImage = (id) => {
    if (!confirm("¿Eliminar imagen?")) return;
    setGallery(gallery.filter((img) => img.id !== id));
  };

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={heroImage}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/50" />

        {isTecnico && (
          <label className="absolute top-20 right-4 z-40 bg-white px-4 py-2 rounded shadow cursor-pointer text-sm">
            Cambiar imagen
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleHeroImage}
            />
          </label>
        )}

        <div className="relative z-10 flex items-center justify-center h-full">
          {isTecnico ? (
            <div className="relative flex items-center gap-3">
              <input
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="bg-transparent border-b-2 border-white
                     text-white text-3xl md:text-5xl font-bold
                     text-center outline-none cursor-text"
              />

              {/* ÍCONO VISIBLE */}
              <Pencil
                size={26}
                className="text-white opacity-90 pointer-events-none"
              />
            </div>
          ) : (
            <h1 className="text-white text-3xl md:text-5xl font-bold">
              {companyName}
            </h1>
          )}
        </div>
      </section>

      {/* ================= PROMOCIONES ================= */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Promociones</h2>

          {isTecnico && (
            <button
              onClick={addPromotion}
              className="bg-[var(--color-principal)] text-white px-4 py-2 rounded hover:bg-[var(--color-principal-hover)] cursor-pointer"
            >
              + Agregar
            </button>
          )}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {promotions.map((promo, i) => (
            <div
              key={promo.id}
              onClick={() => !isTecnico && goToWhatsapp(promo)}
              className="bg-white rounded shadow hover:shadow-lg transition cursor-pointer"
            >
              {/* IMAGEN */}
              <div className="relative h-48">
                <img
                  src={promo.image}
                  className="w-full h-full object-cover rounded-t"
                />

                {isTecnico && (
                  <div className="absolute top-2 right-2 flex gap-2">
                    <label className="bg-white px-2 py-1 text-xs rounded cursor-pointer shadow">
                      Img
                      <input
                        hidden
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          handlePromoImage(i, e.target.files[0])
                        }
                      />
                    </label>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deletePromotion(promo.id);
                      }}
                      className="bg-red-600 text-white text-xs px-2 py-1 rounded"
                    >
                      Borrar
                    </button>
                  </div>
                )}
              </div>

              {/* CONTENIDO */}
              <div className="p-4 space-y-3">
                {isTecnico ? (
                  <>
                    {/* TÍTULO */}
                    <div className="flex items-center gap-2">
                      <input
                        value={promo.title}
                        onChange={(e) =>
                          handlePromoChange(i, "title", e.target.value)
                        }
                        className="w-full font-bold border-b outline-none cursor-text"
                      />
                      <Pencil size={16} className="text-gray-700" />
                    </div>

                    {/* EMPRESA */}
                    <div className="flex items-center gap-2">
                      <input
                        value={promo.company}
                        onChange={(e) =>
                          handlePromoChange(i, "company", e.target.value)
                        }
                        className="w-full text-sm border-b outline-none cursor-text"
                      />
                      <Pencil size={16} className="text-gray-700" />
                    </div>

                    {/* WHATSAPP (NO VISIBLE PARA CLIENTE) */}
                    <div className="flex items-center gap-2">
                      <input
                        value={promo.whatsapp}
                        onChange={(e) =>
                          handlePromoChange(i, "whatsapp", e.target.value)
                        }
                        className="w-full text-sm border-b outline-none cursor-text"
                      />
                      <Pencil size={16} className="text-gray-700" />
                    </div>

                    {/* DESCRIPCIÓN */}
                    <div className="flex gap-2 items-start">
                      <textarea
                        value={promo.description}
                        onChange={(e) =>
                          handlePromoChange(i, "description", e.target.value)
                        }
                        rows={2}
                        className="w-full text-sm border-b outline-none resize-none cursor-text"
                      />
                      <Pencil size={16} className="text-gray-700 mt-1" />
                    </div>
                  </>
                ) : (
                  <>
                    <h3 className="font-bold">{promo.title}</h3>
                    <p className="text-sm text-gray-600">{promo.company}</p>
                    <p className="text-sm">{promo.description}</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= GALERÍA ================= */}

      <section className="bg-[var(--color-principal)] py-16">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex justify-between mb-8">
      <h2 className="text-3xl font-bold text-white">Galería</h2>

      {isTecnico && (
        <label className="bg-white text-[var(--color-principal)] px-4 py-2 rounded cursor-pointer">
          + Agregar imagen
          <input
            hidden
            type="file"
            accept="image/*"
            private
            onChange={(e) => addGalleryImage(e.target.files[0])}
          />
        </label>
      )}
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {gallery.map((img) => (
        <div key={img.id} className="relative">
          <img
            src={img.image}
            className="w-full h-56 object-cover rounded"
          />

          {isTecnico && (
            <button
              onClick={() => deleteGalleryImage(img.id)}
              className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded"
            >
              Borrar
            </button>
          )}
        </div>
      ))}
    </div>
  </div>
</section>

      <CompanyDescription />
      <CompanyValues />
      <WhatsappFloatingButton
        phone="51911223344"   // 👈 WhatsApp de GT Phone
        color="#22c55e"
      />
    </>
  );
}
