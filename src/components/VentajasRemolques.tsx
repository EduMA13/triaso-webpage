"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaShieldAlt, FaBox, FaTruck, FaRegChartBar, FaClock } from "react-icons/fa";


const opciones = [
    {
        titulo: "Mayor capacidad",
        segundotitulo: "Mayor capacidad de carga",
        descripcion:
            "Optimiza tu operación con unidades que permiten transportar más mercancía en cada viaje.",
        icono: <FaPlus size={20} />,
        imagen: "/Images/Ventajas_remolques/1.png",
    },
    {
        titulo: "Seguridad",
        segundotitulo: "Resistencia y seguridad industrial",
        descripcion:
            "Diseñadas para proteger tu carga y garantizar un transporte seguro en todo momento.",
        icono: <FaShieldAlt size={20} />,
        imagen: "/Images/Ventajas_remolques/2.png"
    },
    {
        titulo: "Almacenamiento",
        segundotitulo: "Versatilidad para almacenamiento y carga",
        descripcion:
            "Adaptadas a distintos tipos de carga: pallets, maquinaria, cajas, productos refrigerados y más.",
        icono: <FaBox size={20} />,
        imagen: "/Images/Ventajas_remolques/3.png"
    },
    {
        titulo: "Transporte flexible",
        segundotitulo: "Transporte adaptado a tus rutas y necesidades",
        descripcion:
            "Estructuras modulares o completas que se ajustan a tu tipo de transporte: regional, nacional o internacional.",
        icono: <FaTruck size={20} />,
        imagen: "/Images/Ventajas_remolques/4.png"
    },
    {
        titulo: "Logística",
        segundotitulo: "Mejora tu logística",
        descripcion:
            "Optimiza la distribución y entrega con estructuras adaptadas a procesos logísticos ágiles.",
        icono: <FaRegChartBar size={20} />,
        imagen: "/Images/Ventajas_remolques/5.png"
    },
    {
        titulo: "Aumento de valor",
        segundotitulo: "Incremento del valor operativo",
        descripcion:
            "Unidades pensadas para durar más tiempo en operación y con menor costo de mantenimiento.",
        icono: <FaClock size={20} />,
        imagen: "/Images/Ventajas_remolques/6.png"
    }
];

const VentajasRemolques = () => {
    const [activo, setActivo] = useState(opciones[0]);

    return (
        <section className="w-full px-4 py-10  text-white flex flex-col lg:flex-row items-center justify-center gap-6">
            {/* Menú lateral */}
            <div className="flex flex-col gap-4 w-full lg:w-1/3">
                {opciones.map((op) => (
                    <button
                        key={op.titulo}
                        onClick={() => setActivo(op)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-md text-center font-medium transition-all shadow-lg 
              ${activo.titulo === op.titulo
                                ? "bg-gray-300 text-[#1D2939] shadow-inner"
                                : "bg-white text-[#1D2939] hover:bg-gray-200"
                            }`}
                    >
                        <span className="text-white  bg-[#A0110C] rounded-full p-2
            ">{op.icono}</span>
                        {op.titulo}
                    </button>
                ))}
            </div>

            {/* Contenido activo */}
            <div className="w-full lg:w-2/3 bg-white text-[#003265] p-6 rounded-lg shadow-lg">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activo.titulo}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.4 }}
                        className="text-center space-y-4"
                    >
                        <h3 className="text-xl text-[#002A55] font-semibold">{activo.segundotitulo}</h3>
                        <img
                            src={activo.imagen}
                            alt={activo.titulo}
                            className="rounded-md w-full max-w-md mx-auto"
                        />
                        <p className="text-sm font-medium text-[#002A55] md:text-base">{activo.descripcion}</p>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default VentajasRemolques;
