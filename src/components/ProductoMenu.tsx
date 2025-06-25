"use client";

import { useState } from "react";
import Image from "next/image";

const categorias = [
  "Accesos y Cerramientos",
  "Cubiertas y Protección",
  "Estructuras Metálicas",
  "Accesos y Soportes",
  "Decorativos y Funcionales",
  "Fabricaciones a medida",
];

const productos = {
  "Accesos y Cerramientos": [
    {
      titulo: "Portones",
      imagen: "/Images/FirstM/1/Porton.png",
      descripcion: "Portones diseñados a la medida con estructura metálica reforzada.",
      especificaciones: [
        "Estructura en acero con pintura electrostática",
        "Opciones: abatibles, corredizos o automáticos",
        "Compatibles con sensores y motores",
        "Diseño 3D previo",
        "Instalación profesional",
        "Personalización total",
      ],
    },
    {
      titulo: "Rejas y cercas metálicas",
      imagen: "/Images/FirstM/1/Reja.png",
      descripcion: "Diseños seguros y duraderos para espacios residenciales e industriales.",
      especificaciones: [
        "Fabricación a medida",
        "Pintura resistente a la intemperie",
        "Opciones decorativas y funcionales",
      ],
    },
    {
      titulo: "Puertas Metálicas",
      imagen: "/Images/FirstM/1/Puerta.png",
      descripcion: "Portones diseñados a la medida con estructura metálica reforzada.",
      especificaciones: [
        "Estructura en acero con pintura electrostática",
        "Opciones: abatibles, corredizos o automáticos",
        "Compatibles con sensores y motores",
        "Diseño 3D previo",
        "Instalación profesional",
        "Personalización total",
      ],
    },
    {
      titulo: "Cortinas metálicas enrrollables",
      imagen: "/Images/FirstM/1/Cortina.png",
      descripcion: "Portones diseñados a la medida con estructura metálica reforzada.",
      especificaciones: [
        "Estructura en acero con pintura electrostática",
        "Opciones: abatibles, corredizos o automáticos",
        "Compatibles con sensores y motores",
        "Diseño 3D previo",
        "Instalación profesional",
        "Personalización total",
      ],
    },
  ],
  "Cubiertas y Protección": [
    {
      titulo: "Techumbres",
      imagen: "/Images/FirstM/2/Techumbre.png",
      descripcion: "Portones diseñados a la medida con estructura metálica reforzada.",
      especificaciones: [
        "Estructura en acero con pintura electrostática",
        "Opciones: abatibles, corredizos o automáticos",
        "Compatibles con sensores y motores",
        "Diseño 3D previo",
        "Instalación profesional",
        "Personalización total",
      ],
    },
    {
      titulo: "Domos estructurales",
      imagen: "/Images/FirstM/2/Domo.png",
      descripcion: "Diseños seguros y duraderos para espacios residenciales e industriales.",
      especificaciones: [
        "Fabricación a medida",
        "Pintura resistente a la intemperie",
        "Opciones decorativas y funcionales",
      ],
    },
    {
      titulo: "Marquesinas",
      imagen: "/Images/FirstM/2/Marquesina.png",
      descripcion: "Portones diseñados a la medida con estructura metálica reforzada.",
      especificaciones: [
        "Estructura en acero con pintura electrostática",
        "Opciones: abatibles, corredizos o automáticos",
        "Compatibles con sensores y motores",
        "Diseño 3D previo",
        "Instalación profesional",
        "Personalización total",
      ],
    },
    {
      titulo: "Cubiertas metálicas",
      imagen: "/Images/FirstM/2/Cubierta.png",
      descripcion: "Portones diseñados a la medida con estructura metálica reforzada.",
      especificaciones: [
        "Estructura en acero con pintura electrostática",
        "Opciones: abatibles, corredizos o automáticos",
        "Compatibles con sensores y motores",
        "Diseño 3D previo",
        "Instalación profesional",
        "Personalización total",
      ],
    },
  ],
  "Estructuras Metálicas": [
    {
      titulo: "Cimentaciones y columnas",
      imagen: "/Images/FirstM/3/Cimentacion.png",
      descripcion: "Portones diseñados a la medida con estructura metálica reforzada.",
      especificaciones: [
        "Estructura en acero con pintura electrostática",
        "Opciones: abatibles, corredizos o automáticos",
        "Compatibles con sensores y motores",
        "Diseño 3D previo",
        "Instalación profesional",
        "Personalización total",
      ],
    },
    {
      titulo: "Trabes y vigas armadas",
      imagen: "/Images/FirstM/3/Trabes.png",
      descripcion: "Diseños seguros y duraderos para espacios residenciales e industriales.",
      especificaciones: [
        "Fabricación a medida",
        "Pintura resistente a la intemperie",
        "Opciones decorativas y funcionales",
      ],
    },
    {
      titulo: "Refuerzos estructurales",
      imagen: "/Images/FirstM/3/Refuerzo.png",
      descripcion: "Portones diseñados a la medida con estructura metálica reforzada.",
      especificaciones: [
        "Estructura en acero con pintura electrostática",
        "Opciones: abatibles, corredizos o automáticos",
        "Compatibles con sensores y motores",
        "Diseño 3D previo",
        "Instalación profesional",
        "Personalización total",
      ],
    },
    {
      titulo: "Cubiertas metálicas",
      imagen: "/Images/FirstM/3/Estructura.png",
      descripcion: "Portones diseñados a la medida con estructura metálica reforzada.",
      especificaciones: [
        "Estructura en acero con pintura electrostática",
        "Opciones: abatibles, corredizos o automáticos",
        "Compatibles con sensores y motores",
        "Diseño 3D previo",
        "Instalación profesional",
        "Personalización total",
      ],
    },
  ],
  "Accesos y Soportes": [
    {
      titulo: "Escaleras plataforma",
      imagen: "/Images/FirstM/4/Escalera.png",
      descripcion: "Portones diseñados a la medida con estructura metálica reforzada.",
      especificaciones: [
        "Estructura en acero con pintura electrostática",
        "Opciones: abatibles, corredizos o automáticos",
        "Compatibles con sensores y motores",
        "Diseño 3D previo",
        "Instalación profesional",
        "Personalización total",
      ],
    },
    {
      titulo: "Barandales y pasamanos",
      imagen: "/Images/FirstM/4/Barandal.png",
      descripcion: "Diseños seguros y duraderos para espacios residenciales e industriales.",
      especificaciones: [
        "Fabricación a medida",
        "Pintura resistente a la intemperie",
        "Opciones decorativas y funcionales",
      ],
    },
    {
      titulo: "Rampas metálicas",
      imagen: "/Images/FirstM/4/Rampa.png",
      descripcion: "Portones diseñados a la medida con estructura metálica reforzada.",
      especificaciones: [
        "Estructura en acero con pintura electrostática",
        "Opciones: abatibles, corredizos o automáticos",
        "Compatibles con sensores y motores",
        "Diseño 3D previo",
        "Instalación profesional",
        "Personalización total",
      ],
    },
    {
      titulo: "Plataformas de trabajo",
      imagen: "/Images/FirstM/4/Plataforma.png",
      descripcion: "Portones diseñados a la medida con estructura metálica reforzada.",
      especificaciones: [
        "Estructura en acero con pintura electrostática",
        "Opciones: abatibles, corredizos o automáticos",
        "Compatibles con sensores y motores",
        "Diseño 3D previo",
        "Instalación profesional",
        "Personalización total",
      ],
    },
  ],
  "Decorativos y Funcionales": [
    {
      titulo: "Canceles y divisiones metálicas",
      imagen: "/Images/FirstM/5/Cancel.png",
      descripcion: "Portones diseñados a la medida con estructura metálica reforzada.",
      especificaciones: [
        "Estructura en acero con pintura electrostática",
        "Opciones: abatibles, corredizos o automáticos",
        "Compatibles con sensores y motores",
        "Diseño 3D previo",
        "Instalación profesional",
        "Personalización total",
      ],
    },
    {
      titulo: "Muebles metálicas personalizados",
      imagen: "/Images/FirstM/5/Mueble.png",
      descripcion: "Diseños seguros y duraderos para espacios residenciales e industriales.",
      especificaciones: [
        "Fabricación a medida",
        "Pintura resistente a la intemperie",
        "Opciones decorativas y funcionales",
      ],
    },
    {
      titulo: "Letras y letreros cortados en plasma o CNC",
      imagen: "/Images/FirstM/5/CNC.png",
      descripcion: "Portones diseñados a la medida con estructura metálica reforzada.",
      especificaciones: [
        "Estructura en acero con pintura electrostática",
        "Opciones: abatibles, corredizos o automáticos",
        "Compatibles con sensores y motores",
        "Diseño 3D previo",
        "Instalación profesional",
        "Personalización total",
      ],
    },
    {
      titulo: "Soportes metálicos para señalización/publicidad",
      imagen: "/Images/FirstM/5/Soporte.png",
      descripcion: "Portones diseñados a la medida con estructura metálica reforzada.",
      especificaciones: [
        "Estructura en acero con pintura electrostática",
        "Opciones: abatibles, corredizos o automáticos",
        "Compatibles con sensores y motores",
        "Diseño 3D previo",
        "Instalación profesional",
        "Personalización total",
      ],
    },
  ],
  "Fabricaciones a medida": [
    {
      titulo: "Jaulas para transporte",
      imagen: "/Images/FirstM/6/Jaula.png",
      descripcion: "Portones diseñados a la medida con estructura metálica reforzada.",
      especificaciones: [
        "Estructura en acero con pintura electrostática",
        "Opciones: abatibles, corredizos o automáticos",
        "Compatibles con sensores y motores",
        "Diseño 3D previo",
        "Instalación profesional",
        "Personalización total",
      ],
    },
    {
      titulo: "Contenedores metálicos",
      imagen: "/Images/FirstM/6/Contenedor.png",
      descripcion: "Diseños seguros y duraderos para espacios residenciales e industriales.",
      especificaciones: [
        "Fabricación a medida",
        "Pintura resistente a la intemperie",
        "Opciones decorativas y funcionales",
      ],
    },
    {
      titulo: "Chasis para maquinaria /Equipos industriales",
      imagen: "/Images/FirstM/6/Chasis.png",
      descripcion: "Portones diseñados a la medida con estructura metálica reforzada.",
      especificaciones: [
        "Estructura en acero con pintura electrostática",
        "Opciones: abatibles, corredizos o automáticos",
        "Compatibles con sensores y motores",
        "Diseño 3D previo",
        "Instalación profesional",
        "Personalización total",
      ],
    },
    {
      titulo: "Racks para manejo de materiales",
      imagen: "/Images/FirstM/6/Rack.png",
      descripcion: "Portones diseñados a la medida con estructura metálica reforzada.",
      especificaciones: [
        "Estructura en acero con pintura electrostática",
        "Opciones: abatibles, corredizos o automáticos",
        "Compatibles con sensores y motores",
        "Diseño 3D previo",
        "Instalación profesional",
        "Personalización total",
      ],
    },
  ],
};

export default function ProductoMenu() {
  const [categoriaActiva, setCategoriaActiva] = useState("Accesos y Cerramientos");
  const [mostrarModal, setMostrarModal] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  return (
    <section className="w-full lg:flex lg:flex-col lg:justify-center items-center py-6 bg-white rounded-lg shadow-md mt-10 mb-10">
      {/* Menú de categorías */}
      <div className="flex flex-wrap gap-2 justify-center md:justify-center overflow-x-auto pb-4">
        {categorias.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-md font-medium whitespace-nowrap transition-colors ${categoriaActiva === cat
              ? "bg-red-700 text-white"
              : "bg-gray-300 text-gray-800 hover:bg-gray-400"
              }`}
            onClick={() => setCategoriaActiva(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Lista de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-6 mx-5">
        {productos[categoriaActiva]?.map((prod, index) => (
          <div
            key={index}
            className="bg-white lg:w-96 md:w-96 sm:w-48  rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
          >
            <div className="w-full h-[180px]  relative">
              <Image
                src={prod.imagen}
                alt={prod.titulo}
                fill
                className="rounded-md object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold mt-4 text-blue-900">{prod.titulo}</h3>
            <button
              className="mt-4 font-medium bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 transition-colors"
              onClick={() => {
                setProductoSeleccionado(prod);
                setMostrarModal(true);
              }}
            >
              Cotizar producto
            </button>
          </div>
        )) || (
            <div className="col-span-full text-center text-gray-500">
              No hay productos en esta categoría.
            </div>
          )}
      </div>

      {/* Modal emergente */}
      {mostrarModal && productoSeleccionado && (
        <div className="fixed inset-0  backdrop-blur-md z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-lg shadow-lg w-full md:w-[850px] relative p-6 border-2 max-h-[90vh] overflow-y-auto">
            {/* Botón cerrar */}
            <button
              onClick={() => setMostrarModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-700 text-xl"
            >
              &times;
            </button>

            <div className="flex flex-col md:flex-row gap-6 items-center">
              {/* Imagen */}
              <div className="w-full md:w-1/2">
                <Image
                  src={productoSeleccionado.imagen}
                  alt={productoSeleccionado.titulo}
                  width={400}
                  height={300}
                  className="object-contain w-full h-auto"
                />
              </div>

              {/* Info */}
              <div className="w-full md:w-1/2 text-[#1D2939]">
                <h2 className="text-2xl font-bold mb-2 text-center md:text-left text-blue-900">
                  {productoSeleccionado.titulo}
                </h2>
                <p className="text-sm mb-4">{productoSeleccionado.descripcion}</p>
                <ul className="text-sm list-disc list-inside space-y-1">
                  {productoSeleccionado.especificaciones.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="mt-6 text-center md:text-left">
                  <button className="bg-[#A0110C] text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition">
                    Cotizar estructura
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
