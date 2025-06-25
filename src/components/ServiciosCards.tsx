"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaWrench, FaCogs, FaLaptop, FaCheck } from "react-icons/fa";

const servicios = [
  {
    titulo: "Diseño",
    descripcion:
      "Escuchamos tu idea y la convertimos en un diseño 3D. Así visualizas cómo se verá antes de fabricar, con posibilidad de ajustes según tu espacio y gusto",
    icono: <FaLaptop size={40} className="text-[#003265]" />,
  },
  {
    titulo: "Fabricación",
    descripcion:
      "Tu diseño es fabricado por personal capacitado, con maquinaria de precisión, pintura electrostática y control de calidad en cada fase.",
    icono: <FaWrench size={40} className="text-[#003265]" />,
  },
  {
    titulo: "Instalación",
    descripcion:
      "Llevamos el producto a tu ubicación y realizamos la instalación con personal propio, asegurando un montaje limpio, seguro y puntual.",
    icono: <FaCheck size={40} className="text-[#003265]" />,
  },
  {
    titulo: "Rehabilitación",
    descripcion:
      "Realizamos mantenimiento y rehabilitamos para darle un mayor tiempo de vida útil a tu producto",
    icono: <FaCogs size={40} className="text-[#003265]" />,
  },
];

const ServiciosCards = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section className="w-full px-4 py-10 bg-white">
      <div className="flex flex-wrap justify-center gap-6">
        {servicios.map((servicio, index) => (
          <motion.div
            key={index}
            whileHover={!isSmallScreen ? { y: -5, boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)" } : {}}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-full sm:w-[300px] bg-white p-6 rounded-md shadow-md text-center space-y-3"
          >
            <div className="flex justify-center">{servicio.icono}</div>
            <h3 className="text-xl font-bold text-[#B30000]">{servicio.titulo}</h3>
            <p className="text-sm text-[#1D2939] leading-relaxed">
              {servicio.descripcion}
            </p>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-6">
        <a
          href="#"
          className="text-sm font-semibold text-[#003265] hover:underline"
        >
          Aprende más de nuestros servicios →
        </a>
      </div>
    </section>
  );
};

export default ServiciosCards;
