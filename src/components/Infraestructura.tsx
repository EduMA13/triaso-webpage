"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    HiOutlineBolt,
    HiOutlineCog8Tooth,
    HiOutlineFire,
    HiOutlineBeaker 
} from "react-icons/hi2";

const opciones = [
    {
        titulo: "Corte por plasma y CNC",
        descripcion:
            "Utilizamos sistemas de corte por plasma y máquinas CNC para fabricar piezas con tolerancias precisas, garantizando calidad, repetibilidad y eficiencia en cada producción.",
        icono: <HiOutlineBolt size={20} />,
        imagen: "/Images/SecondM/1.png",
    },
    {
        titulo: "Maquinados",
        descripcion:
            "Contamos con centros de maquinado para procesos de fresado y torneado, permitiendo fabricar piezas complejas con gran precisión.",
        icono: <HiOutlineCog8Tooth size={20} />,
        imagen: "/Images/SecondM/2.png",
    },
    {
        titulo: "Hornos de pintura en polvo",
        descripcion:
            "Disponemos de hornos para pintura electrostática, asegurando acabados duraderos, uniformes y resistentes a la corrosión.",
        icono: <HiOutlineFire size={20} />,
        imagen: "/Images/SecondM/3.png",
    },
    {
        titulo: "Fundición",
        descripcion:
            "Ofrecemos procesos de fundición para piezas metálicas, adaptándonos a requerimientos específicos de forma, tamaño y resistencia.",
        icono: <HiOutlineBeaker size={20} />,
        imagen: "/Images/SecondM/4.png",
    },
];

const Infraestructura = () => {
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
            <div className="w-full lg:w-2/3 bg-white text-[#1D2939] p-6 rounded-lg shadow-lg">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activo.titulo}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.4 }}
                        className="text-center space-y-4"
                    >
                        <h3 className="text-xl text-[#002A55] font-semibold">{activo.titulo}</h3>
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

export default Infraestructura;
