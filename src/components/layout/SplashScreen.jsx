import { useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../../assets/logoReparaYa.png";

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish?.();
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-sky-400 flex items-center justify-center z-[9999]">
      <motion.img
        src={logo}
        alt="Logo"
        className="w-44"
        initial={{ y: 120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  );
}
