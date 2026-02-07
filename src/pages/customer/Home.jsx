import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ClientHeader from "../../components/ClientHeader";

// 🔹 IMPORTAR IMÁGENES
import tecnico1 from "../../assets/images/localgt.webp";
import tecnico2 from "../../assets/images/localilucas.webp";
import tecnico3 from "../../assets/images/localsolucionesmc.webp";


export default function Home() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();

  const images = [tecnico1, tecnico2, tecnico3];

  const [current, setCurrent] = useState(0);
  const startX = useRef(null);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => next(), 4000);
    return () => clearInterval(interval);
  }, [current]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const start = (x) => (startX.current = x);

  const end = (x) => {
    if (!startX.current) return;
    const diff = startX.current - x;
    if (diff > 50) next();
    if (diff < -50) prev();
    startX.current = null;
  };

  return (
    <>
      {/* <ClientHeader user={user} /> */}

      {/* SLIDER FULLSCREEN */}
      <main
        className="relative w-screen h-[calc(100vh-64px)] mt-16 overflow-hidden"
        onMouseDown={(e) => start(e.clientX)}
        onMouseUp={(e) => end(e.clientX)}
        onTouchStart={(e) => start(e.touches[0].clientX)}
        onTouchEnd={(e) => end(e.changedTouches[0].clientX)}
      >
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}vw)` }}
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              className="w-screen h-full object-cover flex-shrink-0"
              alt="Técnico"
            />
          ))}
        </div>

        {/* Botones */}
        <button
          onClick={prev}
          className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/50 text-white text-3xl px-4 py-2 rounded-full"
        >
          ‹
        </button>

        <button
          onClick={next}
          className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/50 text-white text-3xl px-4 py-2 rounded-full"
        >
          ›
        </button>

        {/* Botón inferior */}
        <div className="absolute bottom-10 w-full flex justify-center">
          <button
            onClick={() => navigate("/tecnicos")}
            className="bg-[var(--color-principal)] hover:bg-[var(--color-principal-hover)] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-xl"
          >
            Ver Técnicos Disponibles
          </button>
        </div>
      </main>
    </>
  );
}
