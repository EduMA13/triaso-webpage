"use client";

import { useState } from "react";
import Image from "next/image";

const categorias = [
  "Remolques",
  "Semi-remolques",
  "Unidades de servicio",
  "Habilitaciones para cajas",
];

import productos from "../../public/data/Productos";

export default function RemolquesMenu() {

  const [categoriaActiva, setCategoriaActiva] = useState("Remolques");
  const [subcategoriaActiva, setSubcategoriaActiva] = useState(
    Array.isArray(productos["Remolques"])
      ? null
      : Object.keys(productos["Remolques"])[0] || null
  );

  const categoriaSeleccionada = productos[categoriaActiva];
  const esListaDirecta = Array.isArray(categoriaSeleccionada);
  const productosSeleccionados = esListaDirecta
    ? categoriaSeleccionada
    : categoriaSeleccionada?.[subcategoriaActiva] || [];

  const renderLista = (titulo: string, items?: string[]) =>
    items?.length ? (
      <>
        <p className="font-medium text-[20px]">{titulo}</p>
        <ul className="list-disc list-inside text-[20px] font-medium space-y-1">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </>
    ) : null;

  return (
    <section className="w-auto flex flex-col items-center py-6 bg-white rounded-lg shadow-md mt-10 mb-10">

      {/* Categorías */}
      <div className="flex flex-wrap gap-2 justify-center pb-4">
        {categorias.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              categoriaActiva === cat
                ? "bg-red-700 text-white"
                : "bg-gray-300 text-gray-800 hover:bg-gray-400"
            }`}
            onClick={() => {
              setCategoriaActiva(cat);
              setSubcategoriaActiva(
                Array.isArray(productos[cat])
                  ? null
                  : Object.keys(productos[cat])[0] || null
              );
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Subcategorías */}
      {!esListaDirecta && (
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {Object.keys(categoriaSeleccionada || {}).map((subcat) => (
            <button
              key={subcat}
              className={`px-3 py-1 rounded-md text-[15px] w-32 font-medium ${
                subcategoriaActiva === subcat
                  ? "bg-red-700 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setSubcategoriaActiva(subcat)}
            >
              {subcat}
            </button>
          ))}
        </div>
      )}

      {/* Productos */}
      <div className="w-full px-4 md:px-10 max-w-6xl">
        {productosSeleccionados.map((prod, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12"
          >
            {/* Columna izquierda */}
            <div className="flex-1 text-[#003265] space-y-3">
              <p className="text-[20px] font-medium">{prod.descripcion}</p>
              {renderLista("Especificaciones principales:", prod.especificaciones)}
              {prod.segundadescripcion && (
                <p className="font-medium text-[20px]">{prod.segundadescripcion}</p>
              )}
              {renderLista("Este servicio es ideal para:", prod.aplicacion)}
              {renderLista("Características principales:", prod.segundaespecificaciones)}
              {renderLista("Incluye:", prod.incluye)}
              {renderLista("Características opcionales:", prod.opcionales)}
            </div>

            {/* Columna derecha */}
            <div className="flex flex-col items-center justify-center w-full md:w-1/3">
              <div className="relative w-full h-[200px] ">
                <Image
                  src={prod.imagen}
                  alt={prod.titulo}
                  
                  width={500}
                  height={500}
                  
                />
              </div>
            </div>
          </div>
        ))}

        {/* Botones y garantía */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-4">
          <div className="bg-[#003265] text-white rounded-lg px-6 py-4 text-[15px] font-medium text-center md:text-left lg:w-96 md:w-auto">
            <p className="font-semibold">Garantía</p>
            <p>6 meses en estructura</p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {productosSeleccionados.map(
              (prod, i) =>
                prod.fichaTecnica && (
                  <a
                    key={i}
                    href={prod.fichaTecnica}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#A0110C] text-white px-5 py-2 rounded-md font-semibold text-[15px] hover:bg-red-800 transition"
                  >
                    Descargar ficha técnica
                  </a>
                )
            )}

            <button className="bg-[#A0110C] text-white px-5 py-2 rounded-md font-semibold text-[15px] hover:bg-red-800 transition">
              Cotizar unidad
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

