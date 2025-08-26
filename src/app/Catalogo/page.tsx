/**
 * 
 *
 * Página principal que contiene el catálogo de productos.
 *
 * Datos de entrada:
 * - Contiene el componente <CatalogoProductos /> que se encarga de la lógica.
 *
 *
 * Uso:
 * Actúa como página de Next.js en rutas como `/Catalogo` o `/CatalogoPaileria`.
 * Su responsabilidad principal es envolver <CatalogoProductos /> en un layout
 * con cabecera, banner y pie de página.
 * Tanto esta página como CatalogoPaileria no maneja datos por lo cual estos se deberían dejar intactos.
 */



'use client';
import Header from "@/components/Header";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import CatalogoProductos from "@/components/CatalogoProductos";

export default function Catalogo() {
    return (
        <div className="">
            <main className=" space-y-10">
                {/* navbar */}
                <div>
                    <div className="fixed top-0 left-0 w-full z-40  shadow-md">
                        <Header />
                    </div>

                    <header className="relative h-[500px] w-full bg-cover bg-center text-white" style={{ backgroundImage: "url('/remolques.jpg')" }}>
                        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 gap-4 mx-16">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                            >

                            </motion.div>
                            <motion.h1
                                className="text-white text-3xl mt-4 font-bold "
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                            >
                                Productos
                            </motion.h1>
                            <motion.p
                                className="font-medium"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}>
                                Aquí encontrarás más información sobre nuestros productos.
                            </motion.p>
                        </div>
                    </header>
                </div>


                {/* body */}
                <div className="space-y-10">
                <CatalogoProductos />

                </div>
                {/* footer */}
                <div className="items-center">
                    <Footer />
                </div>
            </main>

        </div>
    );
}
