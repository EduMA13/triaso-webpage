'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import NavigationButton from './NavigationButton';
import { Menu, X } from 'lucide-react'; // Iconos para el botón hamburguesa

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <header className="bg-[#1D2939] shadow-md px-5 md:px-20 py-4">
            <div className="flex justify-between items-center">
                {/* Logo y navegación izquierda */}
                <div className="flex items-center space-x-5">
                    <Image src="/triaso_logo.png" alt="Logo" width={100} height={100} />
                    <div className="hidden lg:flex space-x-5">
                        <NavigationButton text="Fabricación" />
                        <NavigationButton text="Remolques" />
                    </div>
                </div>

                {/* Menú Desktop */}
                <nav className="hidden lg:flex space-x-5">
                    <a href="#" className="text-white hover:text-gray-300 font-medium">Inicio</a>
                    <a href="#" className="text-white hover:text-gray-300">Nosotros</a>
                    <a href="#" className="text-white hover:text-gray-300">Servicios</a>
                    <a href="#" className="text-white hover:text-gray-300">Contacto</a>
                </nav>

                {/* Botón hamburguesa */}
                <button className="lg:hidden text-white" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Menú móvil desplegable */}
            {isMobileMenuOpen && (
                <div className=" flex flex-col justify-center items-center lg:hidden mt-4 space-y-2">
                    <a href="#" className="block text-white hover:text-gray-300">Inicio</a>
                    <a href="#" className="block text-white hover:text-gray-300">Nosotros</a>
                    <a href="#" className="block text-white hover:text-gray-300">Servicios</a>
                    <a href="#" className="block text-white hover:text-gray-300">Contacto</a>

                    <NavigationButton text="Fabricación" />
                    <NavigationButton text="Remolques" />

                </div>
            )}
        </header>
    );
};

export default Header;
