/**
 * CatalogoProductos.jsx
 *
 * Componente de catálogo dinámico de productos
 *
 * Datos de entrada:
 * - Obtiene las categorías y productos desde archivos estáticos de datos:
 *   - /public/data/Catalogo_remolque.tsx
 *   - /public/data/Catalogo_paileria.tsx
 * - Selecciona qué dataset cargar según la ruta actual, es decir, si el usuario entra desde la página
 * de pailería entonces cargará los productos de pailería e igual con la de remolques (usePathname).
 *
 * Funciones internas:
 * - categoriaActiva: categoría actualmente seleccionada.
 * - productoActivo: producto actualmente seleccionado dentro de la categoría.
 *
 *
 * Uso:
 * Se importa en las carpetas "Catalogo" y "CatalogoPaileria" para renderizar el catálogo
 * según el contexto de la ruta.
 */

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { categorias as categoriasRemolque } from "../../public/data/Catalogo_remolque";
import { categorias as categoriasPaileria } from "../../public/data/Catalogo_paileria";

export default function CatalogoProductos() {

    const pathname = usePathname();

    const categorias =
        pathname.startsWith("/CatalogoPaileria")
            ? categoriasPaileria
            : categoriasRemolque;


    const [categoriaActiva, setCategoriaActiva] = useState(categorias[0]);
    const [productoActivo, setProductoActivo] = useState(categorias[0].productos[0]);

    return (
        <div className="max-w-6xl mx-auto p-4 bg-white shadow inset-shadow-2xs rounded-lg">
            {/* Título */}
            <h2 className="text-center text-2xl md:text-4xl font-bold mb-4 text-[#002A55]">
                Categoría de productos
            </h2>

            {/* Menú de categorías */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 bg-white p-3 md:p-4 rounded-md shadow inset-shadow-2xs">
                {categorias.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => {
                            setCategoriaActiva(cat);
                            setProductoActivo(cat.productos[0]);
                        }}
                        className={`py-2 px-4 md:px-5 rounded-md font-semibold text-[14px] ${categoriaActiva.id === cat.id
                            ? "bg-[#A0110C] text-white"
                            : "bg-[#969696] text-white hover:bg-gray-500"
                            }`}
                    >
                        {cat.nombre}
                    </button>
                ))}
            </div>

            {/* Contenido principal */}
            <div className="flex flex-col md:flex-row gap-6">
                {/* Menú lateral de productos */}
                <div className="w-full md:w-1/4 bg-white p-4 rounded-lg shadow inset-shadow-2xs">
                    <h3 className="font-semibold mb-3 text-[#002A55] text-center text-lg md:text-xl">
                        Modelos
                    </h3>
                    <ul className="space-y-2">
                        {categoriaActiva.productos.map((prod) => (
                            <li key={prod.id}>
                                <button
                                    onClick={() => setProductoActivo(prod)}
                                    className={`flex items-center gap-2 w-full text-left p-3 rounded-md ${productoActivo.id === prod.id
                                        ? "bg-[#F6F6F6] font-semibold inset-shadow-2xs shadow"
                                        : "bg-white font-semibold text-gray-700 shadow-md hover:bg-gray-200"
                                        }`}
                                >
                                    <Image
                                        src={prod.imagen}
                                        alt={prod.nombre}
                                        width={40}
                                        height={40}
                                        className="object-contain rounded-md"
                                    />
                                    <span className="text-sm">{prod.nombre}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Vista de producto */}
                <div className="w-full md:w-3/4 p-4">
                    <Image
                        src={productoActivo.imagen}
                        alt={productoActivo.nombre}
                        width={500}
                        height={300}
                        className="mx-auto object-contain"
                    />

                    <div className="mt-4 space-y-3">
                        <div>
                            <p className="font-semibold text-[#002A55]">Detalles</p>
                            <p className="text-medium">{productoActivo.descripcion}</p>
                        </div>

                        {productoActivo.capacidades && (
                            <div>
                                <p className="font-semibold text-[#002A55]">Capacidades</p>
                                <p className="text-medium">{productoActivo.capacidades}</p>
                            </div>
                        )}

                        {productoActivo.medidas?.length > 0 && (
                            <div>
                                <p className="font-semibold text-[#002A55]">Medidas</p>
                                <ul className="list-disc list-inside text-medium">
                                    {productoActivo.medidas.map((med, i) => (
                                        <li key={i}>{med}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {productoActivo.caracteristicas?.length > 0 && (
                            <div>
                                <h4 className="font-semibold text-[#002A55]">Características</h4>
                                <ul className="list-disc list-inside text-medium">
                                    {productoActivo.caracteristicas.map((opcion, index) => (
                                        <li key={index}>{opcion}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {productoActivo.incluye?.length > 0 && (
                            <div>
                                <h4 className="font-semibold text-[#002A55]">Incluye</h4>
                                <ul className="list-disc list-inside text-medium">
                                    {productoActivo.incluye.map((opcion, index) => (
                                        <li key={index}>{opcion}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {productoActivo.aplicaciones?.length > 0 && (
                            <div>
                                <h4 className="font-semibold text-[#002A55]">Aplicaciones comunes</h4>
                                <ul className="list-disc list-inside text-medium">
                                    {productoActivo.aplicaciones.map((opcion, index) => (
                                        <li key={index}>{opcion}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {productoActivo.opcionales?.length > 0 && (
                            <div>
                                <h4 className="font-semibold text-[#002A55]">Opcionales</h4>
                                <ul className="list-disc list-inside text-medium">
                                    {productoActivo.opcionales.map((opcion, index) => (
                                        <li key={index}>{opcion}</li>
                                    ))}
                                </ul>
                            </div>
                        )}


                    </div>
                </div>
            </div>

            {/* Secciones adicionales */}
            <div className="mt-6 space-y-4">

                {/* Render 3D NOTA: no hay ninguna herramienta que permita el renderizado del render por ahora */}
                <div className="border rounded-lg shadow p-4">
                    <h4 className="bg-[#002A55] text-white p-3 rounded-t-lg font-semibold ">
                        Render 3D
                    </h4>
                    <div className="bg-gray-100 h-40 flex items-center justify-center">
                        {productoActivo.render3D ? (
                            <p className="text-sm text-gray-500">
                                Aquí se integraría el visor 3D para {productoActivo.nombre}.
                            </p>
                        ) : (
                            <p className="text-sm text-gray-500">No disponible</p>
                        )}
                    </div>
                </div>

                {/* Ficha técnica */}
                <div className="border rounded-lg shadow p-4">
                    <h4 className="bg-[#002A55] text-white p-3  rounded-t-lg font-semibold">
                        Fichas técnicas
                    </h4>
                    <div className="flex bg-gray-100 justify-center rounded-b-lg">
                        {productoActivo.fichaTecnica ? (
                            <div className="my-5">
                                <a
                                    href={productoActivo.fichaTecnica}
                                    download
                                    className="bg-[#A0110C] text-white px-4 py-3 rounded shadow hover:bg-red-700"
                                >
                                    Descargar PDF
                                </a>
                            </div>
                        ) : (
                            <p className="text-sm text-gray-500 p-5">No disponible</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
