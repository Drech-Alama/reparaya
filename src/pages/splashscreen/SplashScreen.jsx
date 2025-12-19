import { useEffect, useState } from "react";
import logo from "../../assets/logoReparaYa.png";

export default function SplashScreen({ onFinish }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onFinish) onFinish(); // opcional: notificar al componente padre
    }, 1600); // duración total aproximada
    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-sky-400 flex items-center justify-center z-50 overflow-hidden transition-opacity duration-600 ease-out opacity-100">
      <img
        src={logo}
        alt="Logo"
        className="w-44 transform scale-90 opacity-0 animate-scale-fade"
      />
      <style>
        {`
          @keyframes scale-fade {
            0% { transform: scale(0.8); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          .animate-scale-fade {
            animation: scale-fade 1s forwards;
          }
        `}
      </style>
    </div>
  );
}