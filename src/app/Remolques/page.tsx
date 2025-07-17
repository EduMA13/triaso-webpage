'use client';
import Header from "@/components/Header";
import NavigationButton from "@/components/NavigationButton";
import CarruselRemolques from "@/components/CarruselRemolques";
import { motion } from "framer-motion";

import InformacionContacto from "@/components/InformacionContacto";
import Footer from "@/components/Footer";
import RemolquesMenu from "@/components/RemolquesMenu";
import QuienesSomosRemolques from "@/components/QuienesSomosRemolques";
import NosotrosRemolques from "@/components/NosotrosRemolques";
import VentajasRemolques from "@/components/VentajasRemolques";
import IndustriasRemolques from "@/components/IndustriasRemolques";

export default function Remolques() {
    return (
        <div className="">
            <main className=" space-y-10">
                {/* navbar */}
                <div>
                    <div className="fixed top-0 left-0 w-full z-40  shadow-md">
                        <Header />
                    </div>

                    <header className="relative h-[1000px] w-full bg-cover bg-center text-white" style={{ backgroundImage: "url('/remolques.jpg')" }}>
                        <div className="relative z-10 flex flex-col items-start justify-center h-full text-center px-4 gap-4 mx-16">
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
                                Soluciones de transporte y carga de alto rendimiento
                            </motion.h1>
                            <motion.p
                                className="font-medium"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}>
                                Fabricadas a medida, listas para operar en México y EE.UU., adaptadas a tus necesidades de logística y carga.
                            </motion.p>
                            <motion.div
                                className=" sm:flex-col items-center justify-center space-y-10 lg:flex-row lg:space-x-20"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                            >
                                <NavigationButton text="Catálogo" downloadUrl="/assets/Catalogo-Nortam.pdf" />
                            </motion.div>
                        </div>
                    </header>
                </div>


                {/* body */}
                <div className="space-y-10">

                    <motion.div className="flex flex-col justify-center items-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >

                        <CarruselRemolques />
                    </motion.div>


                    <motion.div className="bg-[#F8F8F8] p-5 "
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        viewport={{ once: true, amount: 0.2 }}>
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#B30000] mb-6">
                            Catálogo
                        </h2>
                        <RemolquesMenu />
                    </motion.div>

                    <div>
                        <QuienesSomosRemolques />
                    </div>

                    <div className="bg-[#F8F8F8] p-5">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#B30000] mb-6">
                            ¿Porqué nosotros?
                        </h2>
                        <NosotrosRemolques />
                    </div>

                    <div className=" p-5">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#B30000] mb-6">
                            Ventajas de nuestras cajas secas y refrigeradas
                        </h2>
                        <VentajasRemolques />
                    </div>

                    <div className="bg-[#F8F8F8] p-5">
                        <IndustriasRemolques />
                    </div>

                    <div>
                        <InformacionContacto />
                    </div>
                </div>
                {/* footer */}
                <div className="items-center">
                    <Footer />
                </div>
            </main>

        </div>
    );
}
