import { useEffect } from "react";
import logo from "../assets/images/logoReparaYa.png";

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // avisar que terminó
    }, 1500); // Duración del splash
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-[var(--color-principal)] flex items-center justify-center z-50">
      <img
        src={logo}
        alt="Logo"
        className="w-32 animate-slide-up"
      />
    </div>
  );
}
