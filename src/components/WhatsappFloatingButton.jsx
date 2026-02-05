export default function WhatsappFloatingButton({
  phone = "51999999999",
  message = "Hola 👋, quiero información",
  color = "#25D366",
  hoverColor = "#1ebe5d",
  position = "right", // right | left
}) {
  const openWhatsapp = () => {
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <button
      onClick={openWhatsapp}
      className={`
        fixed bottom-6 ${position === "right" ? "right-6" : "left-6"}
        z-50 group
      `}
    >
      {/* Borde expansivo */}
      <span
        className="absolute inset-0 rounded-full animate-ping"
        style={{ backgroundColor: color, opacity: 0.35 }}
      ></span>

      {/* Botón */}
      <span
        className="
          relative flex items-center gap-3
          text-white font-semibold
          px-5 py-4 rounded-full
          shadow-2xl
          transition-all duration-300
          hover:scale-105
        "
        style={{
          backgroundColor: color,
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = hoverColor)
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = color)
        }
      >
        {/* Icono WhatsApp */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.5 2.1 7.9L0 32l8.3-2.2c2.3 1.3 4.9 2 7.6 2 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4z" />
        </svg>

        <span className="hidden md:inline">WhatsApp</span>
      </span>
    </button>
  );
}
