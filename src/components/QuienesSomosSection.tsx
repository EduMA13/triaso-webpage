'use client'

import Image from "next/image";
import { motion } from "framer-motion";


const QuienesSomosSection = () => {
    return (
        <motion.section
            className="px-4 py-10 md:px-10 lg:px-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#941B1B] mb-10">
                ¿Quiénes somos?
            </h2>

            <div className="flex flex-col lg:flex-row items-center lg:gap-40 gap-10">
                {/* Texto */}
                <motion.div
                    className="lg:w-1/2 flex items-center justify-center text-center lg:text-left text-[#1D2939] space-y-4 text-base md:text-lg"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="space-y-4 font-medium text-[#003265]">
                        <p>
                            En Nortam, nos dedicamos al servicio de fabricación metalúrgicos.
                        </p>
                        <p>
                            Con el equipo y herramientas necesarias para fabricación expertas, creamos toda las clases de estructuras y productos donde sea necesario precisión milimétrica y un apoyo de creación durante todo el proceso.
                        </p>
                        <p>
                            Con nuestras capacidades de diseño, te guiamos en el proceso de creación de la solicitud, y aseguramos que tu producto solicitado sea único.
                        </p>
                    </div>
                </motion.div>

                {/* Imagen */}
                <motion.div
                    className="lg:w-1/2"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <Image
                        src= "/Quienes_somos.jpg"
                        alt="Fabricación Nortam"
                        width={600}
                        height={400}
                        className="rounded-md shadow-md   "
                    />
                </motion.div>
            </div>
        </motion.section>
    );
};

export default QuienesSomosSection;
