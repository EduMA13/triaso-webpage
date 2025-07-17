"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaClipboard , FaMedal , FaTruck , FaCheck, FaSearch, FaWrench} from "react-icons/fa";

const servicios = [
    {
        titulo: "Estructura a tu medida con identidad visual propia",
        descripcion:
            "Adaptamos cada unidad a las especificaciones y colores de tu empresa, creando presencia e identidad en cada traslado.",
        icono: <FaCheck size={30} className="text-white" />,
    },
    {
        titulo: "Equipos con Número de Identificación Vehicular (NIV)",
        descripcion:
            "Fabricamos unidades que cumplen con los requisitos legales para circular en México y el extranjero, con entrega de NIV.",
        icono: < FaTruck size={30} className="text-white" />,
    },
    {
        titulo: "Cumplimos con normativas mexicanas e internacionales",
        descripcion:
            "Nuestras unidades están diseñadas bajo estándares que permiten su operación segura y legal tanto en México como en EE.UU.",
        icono: <FaClipboard  size={30} className="text-white" />,
    },
    {
        titulo: "Garantía directa de fábrica",
        descripcion:
            "Todos nuestros productos cuentan con garantía de fabricación y soporte técnico postventa para asegurar tu inversión.",
        icono: <FaMedal size={30} className="text-white" />,
    },
    {
        titulo: "Producción abierta a supervisión",
        descripcion:
            "Puedes visitar nuestras instalaciones en cualquier momento del proceso para supervisar el avance y calidad de tu unidad.",
        icono: <FaSearch  size={30} className="text-white" />,
    },
    {
        titulo: "Fabricación nacional con componentes premium",
        descripcion:
            "Puedes visitar nuestras instalaciones en cualquier momento del proceso para supervisar el avance y calidad de tu unidad.",
        icono: <FaWrench  size={30} className="text-white" />,
    }    
];

const NosotrosRemolques = () => {
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
        <section className="w-full px-4 py-10 ">
            <div className="grid items-center justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {servicios.map((servicio, index) => (
                    <motion.div
                        key={index}
                        whileHover={!isSmallScreen ? { y: -5, boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)" } : {}}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="h-full w-full md:w-full sm:w-[300px] bg-white p-6 rounded-md shadow-md text-center space-y-3"
                    >
                        <div className=" bg-[#B30000] flex justify-center items-center lg:w-1/6 lg:h-16 h-[25%] w-[20%] rounded-full p-3">{servicio.icono}</div>
                        <h3 className="text-xl font-bold text-[#B30000] text-start">{servicio.titulo}</h3>
                        <p className="text-sm text-[#003265]  text-start leading-relaxed">
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

export default NosotrosRemolques;
