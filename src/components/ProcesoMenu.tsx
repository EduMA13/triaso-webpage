"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";


const pasos = [
    {
        titulo: "Diseño y renderizado",
        descripcion:
            "Escuchamos tu idea y la convertimos en un diseño 3D. Así visualizas cómo se verá antes de fabricar, con posibilidad de ajustes según tu espacio y gusto.",
        imagen: "/Images/ProcesoT/1.png",
    },
    {
        titulo: "Cotización personalizada",
        descripcion:
            "Basado en tu diseño, creamos una cotización que se ajusta a tu presupuesto y necesidades específicas.",
        imagen: "/Images/ProcesoT/2.png",
    },
    {
        titulo: "Fabricación profesional",
        descripcion:
            "Nuestro equipo de expertos fabrica tu producto con precisión milimétrica y materiales de alta calidad.",
        imagen: "/Images/ProcesoT/3.png",
    },
    {
        titulo: "Entrega e instalación",
        descripcion:
            "Nos aseguramos de que recibas tu producto a tiempo, y ofrecemos instalación para garantizar el funcionamiento perfecto.",
        imagen: "/Images/ProcesoT/4.png",
    },
];

export default function ProcesoMenu() {
    const [pasoActivo, setPasoActivo] = useState(pasos[0]);

    return (
        <section className="w-full px-4 py-10 bg-white rounded-lg shadow-md mt-10 mb-10">
            {/* Tabs estilo catálogo */}
            <div className="flex flex-wrap gap-2 justify-center overflow-x-auto pb-4">
                {pasos.map((paso) => (
                    <button
                        key={paso.titulo}
                        className={`px-4 py-2 rounded-md font-medium whitespace-nowrap transition-colors ${pasoActivo.titulo === paso.titulo
                            ? "bg-red-700 text-white"
                            : "bg-gray-300 text-gray-800 hover:bg-gray-400"
                            }`}
                        onClick={() => setPasoActivo(paso)}
                    >
                        {paso.titulo}
                    </button>
                ))}
            </div>

            <div className="flex flex-col gap-10 lg:gap-64 lg:flex-row lg:items-center lg:justify-center">
                {/* Texto */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={pasoActivo.titulo}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.4 }}
                        className="lg:w-1/2 text-center lg:text-left text-[#1D2939] px-4"
                    >
                        <p className="text-base font-medium md:text-lg leading-relaxed text-[#003265]">
                            {pasoActivo.descripcion}
                        </p>
                    </motion.div>
                </AnimatePresence>

                {/* Imagen */}
                <motion.div
                    key={pasoActivo.imagen}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="lg:w-1/4 w-full flex justify-center "
                >
                    <Image
                        src={pasoActivo.imagen}
                        alt={pasoActivo.titulo}
                        width={500}
                        height={300}
                        className="rounded-md shadow-md w-full h-auto object-cover max-w-md"
                    />
                </motion.div>
            </div>

            <div className="text-center mt-8">
                <a
                    href="#"
                    className="text-sm font-semibold text-[#002A55] hover:underline"
                >
                    Aprende más de nuestro proceso →
                </a>
            </div>
        </section>

    );
}
