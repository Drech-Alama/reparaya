import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const slides = [
  {
    id: 1,
    image: "/images/slider1.webp",
    title: "Imagen 1",
  },
  {
    id: 2,
    image: "/images/slider2.webp",
    title: "Imagen 2",
  },
  {
    id: 3,
    image: "/images/slider3.webp",
    title: "Imagen 3",
  },
];

export default function FullScreenSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden bg-black">
      <div className="w-full h-20 fixed top-0 z-10 bg-black"></div>
      {/* SLIDER */}
      <div className="relative flex-1 min-h-0 overflow-hidden">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="w-full h-full flex-shrink-0 flex items-center justify-center"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="object-contain max-h-full max-w-full"
              />
            </div>
          ))}
        </div>

        {/* DOTS */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                current === index
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>

      {/* BOTÓN */}
      <div className="flex items-center justify-center py-6">
        <Link
          to="/tecnicos"
          className="px-10 py-3 bg-[rgb(22,183,183)] text-white rounded-xl text-lg font-semibold
transition transform hover:scale-105 hover:bg-[rgb(18,150,150)] inline-block text-center"
        >
          Buscar técnicos
        </Link>
      </div>
    </div>
  );
}
