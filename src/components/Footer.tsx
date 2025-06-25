import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#1D2939] text-white py-10 px-4 mt-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                {/* Información general */}
                <div className="flex flex-col items-center md:items-center">
                    <Image
                        src={"/Nortam_logo_2.png"}
                        width={150}
                        height={150}
                        alt="Nortam Logo"
                    />
                </div>

                {/* Enlaces rápidos */}
                <div className="flex flex-col items-center md:items-center">
                    <h4 className="text-lg font-semibold mb-3">Enlaces rápidos</h4>
                    <ul className="space-y-2 text-sm ">
                        <li><a href="#" className="hover:underline">Inicio</a></li>
                        <li><a href="#" className="hover:underline">Servicios</a></li>
                        <li><a href="#" className="hover:underline">Infraestructura</a></li>
                        <li><a href="#" className="hover:underline">Contacto</a></li>
                    </ul>
                </div>

                {/* Redes sociales */}
                <div className="flex flex-col items-center md:items-center">
                    <h4 className="text-lg font-semibold mb-3">Síguenos</h4>
                    <div className="flex gap-4">
                        <a href="#" className="bg-white text-[#1D2939] p-2 rounded-full hover:bg-red-700 hover:text-white transition">
                            <FaFacebookF size={18} />
                        </a>
                        <a href="#" className="bg-white text-[#1D2939] p-2 rounded-full hover:bg-red-700 hover:text-white transition">
                            <FaInstagram size={18} />
                        </a>
                        <a href="#" className="bg-white text-[#1D2939] p-2 rounded-full hover:bg-red-700 hover:text-white transition">
                            <FaLinkedinIn size={18} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-center text-sm text-gray-400 mt-10">
                © {new Date().getFullYear()} NORTAM. Todos los derechos reservados.
            </div>
        </footer>

    );
};

export default Footer;
