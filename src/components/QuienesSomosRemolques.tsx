'use client'

import Image from "next/image";
import { motion } from "framer-motion";


const QuienesSomosRemolques = () => {
    return (
        <motion.section
            className="px-4 py-10 md:px-10 lg:px-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#941B1B] mb-10">
                ¿Qué ofrecemos?
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
                            Diseñamos y fabricamos estructuras de transporte versátiles y de alta resistencia.
                        </p>
                        <p>
                            Desde remolques ligeros hasta casetas móviles, chasises industriales, racks de almacenamiento, estructuras publicitarias y mucho más. Todo adaptado a tus necesidades específicas, cumpliendo con normativas nacionales e internacionales.                        </p>
                        <p>
                            Ventajas de nuestros productos
                        </p>
                        <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }} className="space-y-2">
                            <li>Personalización total: medidas, colores, marca o logotipo</li>
                            <li>Certificación para circulación nacional e internacional (con NIV)</li>
                            <li>Estructura robusta, fabricada en acero de alta calidad</li>
                            <li>Equipamiento eléctrico y mecánico completo y funcional</li>
                            <li>Garantía directa de fábrica y acompañamiento postventa</li>
                        </ul>
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
                        src="/Images/Que_ofrecemos.jpg"
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

export default QuienesSomosRemolques;
