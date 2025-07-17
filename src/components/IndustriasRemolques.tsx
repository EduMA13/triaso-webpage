'use client';
import { FaEarthAmericas } from "react-icons/fa6";

import { FaTemperatureLow, FaTruck, FaLock  } from "react-icons/fa";


export default function IndustriasRemolques() {
  const items = [
    {
      icono: <FaTemperatureLow size={30} className="text-white" />,
      titulo: "Alimentos y productos perecederos",
      descripcion:
        "Conserva la cadena de frío con nuestras cajas refrigeradas de alto rendimiento.",
    },
    {
      icono: <FaEarthAmericas size={30} className="text-white" />,
      titulo: "Comercio nacional e internacional",
      descripcion:
        "Transporta mercancías con seguridad y cumpliendo todas las normativas.",
    },
    {
      icono: <FaTruck size={30} className="text-white" />,
      titulo: "Logística y transporte general",
      descripcion:
        "Optimiza tus operaciones con cajas duraderas y de fácil mantenimiento.",
    },
    {
      icono: <FaLock  size={30} className="text-white"/>,
      titulo: "Flotillas privadas o arrendadoras",
      descripcion:
        "Soluciones personalizadas para grandes volúmenes con identidad corporativa.",
    },
  ];

  return (
    <section className="py-10 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#B30000] mb-6">
        Ideal para todas las industrias
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center bg-white rounded-lg shadow-md p-5">
            <div className="text-4xl mb-4 bg-[#A0110C] p-4 rounded-full">{item.icono}</div>
            <h3 className="text-lg font-semibold text-[#A0110C] mb-2">
              {item.titulo}
            </h3>
            <p className="text-[#003265] text-[15px]">{item.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
