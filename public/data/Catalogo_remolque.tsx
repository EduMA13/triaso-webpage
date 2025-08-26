/**
 *
 * Definición de tipos e información base para el catálogo de remolques.
 *
 * Interfaces:
 * - Producto:
 *    Representa un producto individual dentro del catálogo.
 *    Campos:
 *      - id: Identificador único (string).
 *      - nombre: Nombre del producto.
 *      - descripcion?: Descripción corta (opcional).
 *      - capacidades?: Texto que describe capacidades de carga (opcional).
 *      - medidas?: Lista de medidas estándar disponibles (opcional).
 *      - imagen: URL de la imagen representativa.
 *      - fichaTecnica?: URL de archivo PDF con ficha técnica (opcional).
 *      - render3D?: URL de modelo/render 3D en formato .glb u otro (opcional).
 *      - incluye?: Lista de elementos incluidos en el producto (opcional).
 *      - caracteristicas?: Lista de características principales (opcional).
 *      - opcionales?: Lista de opciones adicionales o accesorios (opcional).
 *      - aplicaciones?: Lista de aplicaciones posibles (opcional).
 * 
 * La mayoría de los campos son opcionales para permitir flexibilidad a la hora de integrarlos a la interfaz
 * debido a que no todos los productos tienen la misma cantidad de información disponible.
 *
 * - Categoria:
 *    Representa un grupo de productos bajo un mismo rubro.
 *    Campos:
 *      - id: Identificador único (string).
 *      - nombre: Nombre de la categoría.
 *      - productos: Lista de productos asociados a esta categoría.
 *  
 * 
 * Datos exportados:
 * - categorias: Arreglo de objetos Categoria que agrupa
 *   los distintos tipos de remolques y unidades.
 *
 * Uso:
 * Este archivo provee la estructura de datos que alimenta
 * al componente <CatalogoProductos />.
 * Se utiliza para renderizar dinámicamente:
 *   - Menú de categorías
 *   - Listado de productos
 *   - Vista detallada de cada producto
 *
 * IMPORTANTE:
 * - Las URLs de imágenes, PDFs y renders deben estar disponibles
 *   en las rutas indicadas dentro de /public.
 *   En este caso para los renders del proyecto se tienen que guardar en /public/renders (Depende del nombre que se le ponga a la carpeta)
 *   Esto también aplica para las imágenes y PDFs, las imágenes ya existen por lo cual solo se reutilizan, en el caso de los
 *   renders estos no existen por lo cual se están usando URLs ficticias y deben ser reemplazadas por las reales.
 * 
 * - Cuando se habla de URLs, se refiere a rutas relativas dentro del proyecto por ejemplo: "/assets/renders/remolque-cama-baja.glb"
 * 
 * - Algunos campos opcionales pueden omitirse según el producto,
 *   por lo que el renderizado debe manejar condicionalmente
 *   su existencia.
 */


export interface Producto {
    id: string;
    nombre: string;
    descripcion?: string;
    capacidades?: string;
    medidas?: string[];
    imagen: string;
    fichaTecnica?: string; 
    render3D?: string; 
    incluye?: string[]; 
    caracteristicas?: string[]; 
    opcionales?: string[]; 
    aplicaciones?: string[]; 
}

export interface Categoria {
    id: string;
    nombre: string;
    productos: Producto[];
}

export const categorias: Categoria[] = [
    {
        id: "remolques",
        nombre: "Remolques",
        productos: [
            {
                id: "1",
                nombre: "Remolque 1 eje",
                descripcion:
                    "El Remolque de un solo eje, es el ideal para movimientos de peso mediano.",
                capacidades: "Este remolque de 1 eje cuenta con capacidad de 500 kg, 800 kg y 1,500 kg",
                medidas: ["4' x 7'", "4' x 8'", "5' x 10'", "6.5' x 12'", "6.5' x 14'"],
                imagen: "/Images/Catalogo_remolques/Remolques/1.png",
                fichaTecnica: "/assets/fichas/Remolque_cama_baja_1_eje.png",
                render3D: "///",
            },
            {
                id: "2",
                nombre: "Remolque 2 ejes",
                descripcion: "Los remolques de dos ejes, ideales para transportes pesados.",
                capacidades: "Este remolque de 2 ejes cuenta con capacidad de 1,000 kg a 6,000 kg",
                medidas: ["5' x 10'", "5' x 12'", "5' x 14'", "5' x 16'", "6' x 16'", "6' x 20'", "7' x 16'", "7' x 20'"],
                imagen: "/Images/Catalogo_remolques/Remolques/2.png",
                fichaTecnica: "/assets/fichas/Remolque_cama_baja_2_eje.png",
                render3D: "///",
            },
            {
                id: "3",
                nombre: "Remolques ganaderos",
                descripcion: "Diseñados para el transporte eficiente y seguro de ganado. Fabricados con estructura reforzada, ventilación óptima y puerta trasera con seguro.",
                capacidades: "Este remolque cuenta con la capacidad de 3 a 6 toneladas",
                medidas: ["5' x 10'", "5' x 12'", "5' x 14'", "5' x 16'", "6' x 20'"],
                imagen: "/Images/Catalogo_remolques/Remolques/3.png",
                fichaTecnica: "/assets/fichas/Remolque_ganadero.png",
                render3D: "///",
            },
            {
                id: "4",
                nombre: "Remolques para caballos",
                descripcion: "Diseñados para el transporte seguro y cómodo de caballos. Fabricados con estructura reforzada, ventilación adecuada y acabados durables para uso rudo.",
                capacidades: "Este remolque tiene capacidades de 3 a 6 toneladas",
                medidas: ["6’ x 10’ (para 1–2 caballos pequeños) ", "6’ x 12’ (para 2 caballos estándar) ", "6’ x 14’ (para 2 caballos grandes o 3 pequeños) ", "6’ x 16’ (para hasta 3 caballos estándar) ", "7’ x 16’ (para mayor altura interior y mejor movilidad) ", "7’ x 18’ (opcional, para 3–4 caballos o espacio adicional)"],
                incluye: ["Chasis de acero estructural", "Piso antiderrapante", "Sistema de ventilación y protección lateral", "Iluminación 12V reglamentaria", "Enganche tipo bolón"],
                imagen: "/Images/Catalogo_remolques/Remolques/4.png",
                fichaTecnica: "/assets/fichas/Remolque_caballo.png",
                render3D: "///",

            },
            {
                id: "5",
                nombre: "Remolques cajas",
                descripcion: "Diseñados para ofrecer seguridad, durabilidad y versatilidad, nuestros remolques tipo caja están fabricados en acero estructural con acabados de alta resistencia y pensados para múltiples usos comerciales, industriales y logísticos.",
                capacidades: "Este remolque cuenta con capacidades de 800 kg, 1.5 toneladas, 3 toneladas y 6 toneladas",
                caracteristicas: ["Estructura soldada con acero reforzado", "Paredes de lámina lisa o acanalada según requerimiento ", "Puerta trasera de doble hoja o tipo rampa ", "Piso antiderrapante (acero o madera tratada) ", "Disponibles en versión seca o refrigerada"],
                opcionales: ["Branding exterior con logotipo del cliente ", "Compartimentos internos o racks ", "Acondicionamiento térmico o ventilación"],
                imagen: "/Images/Catalogo_remolques/Remolques/5.png",
                fichaTecnica: "/assets/fichas/Remolque_cajas.png",
                render3D: "///",

            },
            {
                id: "6",
                nombre: "Remolques nodriza",
                descripcion: "Remolques diseñados para el transporte eficiente de agua o líquidos, fabricados con estructura reforzada y acabados duraderos.",
                capacidades: "Este remolque cuenta con capacidad de 1,000 litros, 2,850 litros, 4,000 litros y 5,000 litros.",
                caracteristicas: ["Chasis de acero estructural reforzado ", "Ejes de alta resistencia según capacidad", "Sistema de enganche tipo bolón", "Llantas multipropósito o de uso rudo", "Sistema de iluminación 12V reglamentario"],
                opcionales: ["Toma de llenado y válvulas", "Compartimentos para mangueras o herramienta", "Pintura electrostática en color a elección", "Pintura electrostática en color a elección", "Personalización con logotipo o imagen de marca"],
                imagen: "/Images/Catalogo_remolques/Remolques/6.png",
                fichaTecnica: "/assets/fichas/Remolque_nodriza.png",
                render3D: "///",

            },
        ]
    },
    {
        id: "semi-remolques",
        nombre: "Semi-remolques",
        productos: [
            {
                id: "1",
                nombre: "Semi-remolques regrigerados",
                descripcion:
                    "Fabricamos cajas refrigeradas con estructura profesional y reforzada, disponibles en una variedad de medidas estándar desde 40 hasta 53 pies de largo, según las necesidades de tu empresa.",
                caracteristicas: ["Largos disponibles: de 40’ a 53’ pies ", "Altura interior: desde 2.65 m hasta 2.90 m ", "Ancho interior estándar: 2.50 m ", "Capacidad de carga nominal (México): hasta 30 toneladas ", "Peso en vacío promedio: entre 6,200 kg y 6,800 kg según tamaño y tipo", "Opciones de suspensión: neumática o de muelle", "Configuración de puertas: doble hoja con marco estructural de alta resistencia", "Acabado exterior: aluminio o galvanizado, con opción de pintura personalizada", "Todas nuestras unidades pueden ser fabricadas con NIV (Número de Identificación Vehicular), lo cual permite su registro oficial, legalización y circulación en México y EE.UU., sin problemas de normatividad."],
                imagen: "/Images/Catalogo_remolques/Semi_remolque/1.png",
                fichaTecnica: "/assets/fichas/Semi-remolque.png",
                render3D: "///",
            },
            {
                id: "2",
                nombre: "Semi-remolques secos",
                descripcion:
                    "Fabricamos cajas refrigeradas con estructura profesional y reforzada, disponibles en una variedad de medidas estándar desde 40 hasta 53 pies de largo, según las necesidades de tu empresa.",
                caracteristicas: ["Largos disponibles: de 40’ a 53’ pies ", "Altura interior: desde 2.65 m hasta 2.90 m ", "Ancho interior estándar: 2.50 m ", "Capacidad de carga nominal (México): hasta 30 toneladas ", "Peso en vacío promedio: entre 6,200 kg y 6,800 kg según tamaño y tipo", "Opciones de suspensión: neumática o de muelle", "Configuración de puertas: doble hoja con marco estructural de alta resistencia", "Acabado exterior: aluminio o galvanizado, con opción de pintura personalizada", "Todas nuestras unidades pueden ser fabricadas con NIV (Número de Identificación Vehicular), lo cual permite su registro oficial, legalización y circulación en México y EE.UU., sin problemas de normatividad."],
                imagen: "/Images/Catalogo_remolques/Semi_remolque/1.png",
                fichaTecnica: "/assets/fichas/Semi-remolque.png",
                render3D: "///",
            }
        ]
    },
    {
        id: "unidades",
        nombre: "Unidades de servicio",
        productos: [
            {
                id: "1",
                nombre: "Casetas móviles",
                descripcion:
                    "Construidas con estructura metálica ligera y recubrimientos aislantes",
                aplicaciones: ["Oficinas móviles", "Módulos de seguridad", "Estaciones de control y monitoreo", "Casetas climatizadas con instalación eléctrica"],
                opcionales: ["Aire acondicionado", "Ilumincación LED", "Mobiliario interno", "Branding exterior"],
                imagen: "/Images/Catalogo_remolques/Unidades/1.png",
                fichaTecnica: "/assets/fichas/Caseta.png",
                render3D: "///",
            },
            {
                id: "2",
                nombre: "Puestos móviles",
                descripcion:
                    "Soluciones compactas para venta, atención y servicio al público. Fabricados con materiales resistentes a la intemperie y diseñados para fácil remolque y despliegue rápido.",
                aplicaciones: ["Puestos de comida", "Módulos informativos o de registro", "Boletería o taquillas", "Estaciones de hidratación"],
                imagen: "/Images/Catalogo_remolques/Unidades/2.png",
                fichaTecnica: "/assets/fichas/Puesto_movil.png",
                render3D: "///",
            }
        ]
    },
    {
        id: "habilitaciones",
        nombre: "Habilitaciones para caja",
        productos: [
            {
                id: "1",
                nombre: "Habilitación para caja",
                descripcion:
                    "Contamos con personal especializado y el equipo completo para realizar las instalaciones directamente en planta o en sitio, asegurando que cada detalle cumpla con los objetivos de operación y funcionalidad requeridos.",
                aplicaciones: ["Adaptaciones de logística o reparto", "Instalación de equipos de refrigeración, racks, módulos eléctricos u otros", "Personalización interior para necesidades comerciales o industriales"],
                imagen: "/Images/Catalogo_remolques/Habilitacion/1.png",
                fichaTecnica: "/assets/fichas/Habilitacion_caja.png",
                render3D: "///",
            }
        ]
    }
];

