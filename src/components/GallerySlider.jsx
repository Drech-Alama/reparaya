import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "../assets/images/localgt.webp";
import img2 from "../assets/images/slider1.webp";
import img3 from "../assets/images/slider2.webp";
import img4 from "../assets/images/slider3.webp";

const images = [img1, img2, img3, img4];

export default function GallerySlider() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 768
  );

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");

    const handleChange = (e) => {
      setIsMobile(e.matches);
      setIndex(0); // 🔑 reset seguro
    };

    media.addEventListener("change", handleChange);
    return () =>
      media.removeEventListener("change", handleChange);
  }, []);

  const prev = () => {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Nuestra Galería
        </h2>

        {/* 📱 MOBILE – SLIDER */}
        {isMobile && (
          <div className="relative overflow-hidden">
            <img
              src={images[index]}
              alt={`Galería ${index + 1}`}
              className="h-64 w-full object-cover rounded-lg shadow"
            />

            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow"
            >
              <ChevronRight />
            </button>
          </div>
        )}

        {/* 💻 DESKTOP – GALERÍA */}
        {!isMobile && (
          <div className="grid grid-cols-3 gap-4">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Galería ${i + 1}`}
                className="h-64 w-full object-cover rounded-lg shadow"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
