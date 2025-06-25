'use client';
import Header from "@/components/Header";
import Image from "next/image";
import NavigationButton from "@/components/NavigationButton";
import CarruselImagenes from "@/components/CarruselImagenes";
import ProductoMenu from "@/components/ProductoMenu";
import QuienesSomosSection from "@/components/QuienesSomosSection";
import ProcesoMenu from "@/components/ProcesoMenu";
import ServiciosCards from "@/components/ServiciosCards";
import { motion } from "framer-motion";
import Infraestructura from "@/components/Infraestructura";
import InformacionContacto from "@/components/InformacionContacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
      <main className=" space-y-10">
        {/* navbar */}
        <div>
          <div className="fixed top-0 left-0 w-full z-40  shadow-md">
            <Header />
          </div>

          <header className="relative h-[1000px] w-full bg-cover bg-center text-white" style={{ backgroundImage: "url('/truck.jpg')" }}>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <Image src="/Nortam_logo_2.png" alt="Triaso logo" width={300} height={300} />

              </motion.div>
              <motion.h1
                className="text-white text-xl mt-4 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Diseñamos, fabricamos e instalamos estructuras metálicas y remolques personalizados
              </motion.h1>
              <motion.div
                className=" sm:flex-col items-center justify-center space-y-10 lg:flex-row lg:space-x-20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <NavigationButton text="Catálogo" downloadUrl="/assets/Catalogo-Nortam.pdf" />
                <NavigationButton text="Cotizar" />
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

            <CarruselImagenes />
          </motion.div>


          <motion.div className="bg-[#F8F8F8] p-5 "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#B30000] mb-6">
              Catálogo
            </h2>
            <ProductoMenu />
          </motion.div>

          <div>
            <QuienesSomosSection />
          </div>

          <div className="bg-[#F8F8F8] p-5">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#B30000] mb-6">
              Nuestro proceso de trabajo
            </h2>
            <ProcesoMenu />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#B30000] mb-6">
              Nuestros servicios
            </h2>
            <ServiciosCards />
          </div>

          <div className="bg-[#F8F8F8] p-5">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#B30000] mb-6">
              Nuestra Infraestructura
            </h2>            
            <Infraestructura />
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
