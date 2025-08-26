/**
 *
 * Definición de tipos e información base para el catálogo de remolques. (Misma información que Catalogo_remolque.tsx)
 *
 * Interfaces:
 * - Producto:
 *    Representa un producto individual dentro del catálogo.
 *    Campos:
 *      - id: Identificador único (string).
 *      - nombre: Nombre del producto.
 *      - descripcion?: Descripción corta (opcional).
 *      - imagen: URL de la imagen representativa.
 *      - render3D?: URL de modelo/render 3D en formato .glb u otro (opcional).
 *      - caracteristicas?: Lista de características principales (opcional).
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
    imagen: string;
    render3D?: string; 
    caracteristicas?: string[]; 
}

export interface Categoria {
    id: string;
    nombre: string;
    productos: Producto[];
}

export const categorias = [

  {
    id: "accesos-cerramientos",
    nombre: "Accesos y Cerramientos",
    productos: [
      {
        id: "1",
        nombre: "Portones",
        descripcion: "Soluciones resistentes y estéticas para entradas residenciales, comerciales o industriales.",
        caracteristicas: [
          "Estructura en acero galvanizado",
          "Sistemas: corredizos, batientes o automáticos",
          "Integración con controles remotos y lectores biométricos",
          "Acabados en pintura horneada o recubrimiento anticorrosivo",
          "Diseños minimalistas y clásicos",
          "Servicio de mantenimiento preventivo",
        ],
        imagen: "/Images/FirstM/1/Porton.png",
      },
      {
        id: "2",
        nombre: "Rejas y cercas metálicas",
        descripcion: "Protección confiable que combina seguridad y estilo en cualquier entorno.",
        caracteristicas: [
          "Fabricación modular y adaptable",
          "Recubrimiento antioxidante",
          "Opciones de diseño decorativo o industrial",
          "Instalación rápida en espacios amplios",
        ],
        imagen: "/Images/FirstM/1/Reja.png",
      },
      {
        id: "3",
        nombre: "Puertas Metálicas",
        descripcion: "Puertas robustas diseñadas para máxima durabilidad y seguridad.",
        caracteristicas: [
          "Acero reforzado con aislamiento interno",
          "Disponibles en versiones acústicas y cortafuego",
          "Compatibles con cerraduras electrónicas",
          "Diseños modernos o tradicionales",
          "Instalación certificada",
          "Opciones de color y textura",
        ],
        imagen: "/Images/FirstM/1/Puerta.png",
      },
      {
        id: "4",
        nombre: "Cortinas metálicas enrollables",
        descripcion: "Cortinas automáticas y manuales que ofrecen protección práctica y segura.",
        caracteristicas: [
          "Sistema enrollable silencioso",
          "Material en lámina galvanizada de alta resistencia",
          "Disponibles en microperforado o ciego",
          "Fáciles de operar y mantener",
          "Preparadas para automatización",
        ],
        imagen: "/Images/FirstM/1/Cortina.png",
      },
    ],
  },

  {
    id: "cubiertas-proteccion",
    nombre: "Cubiertas y Protección",
    productos: [
      {
        id: "1",
        nombre: "Techumbres",
        descripcion: "Estructuras ligeras y funcionales para proteger áreas abiertas.",
        caracteristicas: [
          "Diseño arquitectónico adaptable",
          "Estructuras en acero o aluminio",
          "Recubrimientos en lámina o policarbonato",
          "Resistentes a la intemperie",
        ],
        imagen: "/Images/FirstM/2/Techumbre.png",
      },
      {
        id: "2",
        nombre: "Domos estructurales",
        descripcion: "Espacios cubiertos con diseños modernos que aprovechan la luz natural.",
        caracteristicas: [
          "Fabricación a la medida",
          "Materiales en policarbonato, vidrio o acrílico",
          "Protección UV integrada",
          "Variedad de formas geométricas",
        ],
        imagen: "/Images/FirstM/2/Domo.png",
      },
      {
        id: "3",
        nombre: "Marquesinas",
        descripcion: "Cubiertas elegantes para entradas y fachadas con diseño personalizado.",
        caracteristicas: [
          "Estructura metálica ligera",
          "Acabados decorativos modernos",
          "Opciones con iluminación integrada",
          "Resistencia contra lluvia y viento",
        ],
        imagen: "/Images/FirstM/2/Marquesina.png",
      },
      {
        id: "4",
        nombre: "Cubiertas metálicas",
        descripcion: "Protección económica y durable para áreas de trabajo o almacenamiento.",
        caracteristicas: [
          "Acero galvanizado de larga vida útil",
          "Instalación rápida y segura",
          "Disponibles en colores estándar",
          "Diseños modulares expandibles",
        ],
        imagen: "/Images/FirstM/2/Cubierta.png",
      },
    ],
  },

  {
    id: "estructuras-metalicas",
    nombre: "Estructuras Metálicas",
    productos: [
      {
        id: "1",
        nombre: "Cimentaciones y columnas",
        descripcion: "Soporte sólido para construcciones industriales y residenciales.",
        caracteristicas: [
          "Fabricación en acero estructural",
          "Refuerzos según cálculos de carga",
          "Preparación para anclajes de maquinaria",
          "Durabilidad certificada",
        ],
        imagen: "/Images/FirstM/3/Cimentacion.png",
      },
      {
        id: "2",
        nombre: "Trabes y vigas armadas",
        descripcion: "Elementos metálicos que garantizan resistencia en grandes claros.",
        caracteristicas: [
          "Soldadura estructural de alta calidad",
          "Diseño personalizado según planos",
          "Protección anticorrosiva",
          "Capacidad de carga certificada",
        ],
        imagen: "/Images/FirstM/3/Trabes.png",
      },
      {
        id: "3",
        nombre: "Refuerzos estructurales",
        descripcion: "Soluciones para reforzar construcciones existentes y aumentar su seguridad.",
        caracteristicas: [
          "Sistemas de refuerzo metálico",
          "Compatibles con concreto y acero",
          "Instalación sin afectar operaciones",
          "Análisis estructural previo",
        ],
        imagen: "/Images/FirstM/3/Refuerzo.png",
      },
      {
        id: "4",
        nombre: "Cubiertas metálicas",
        descripcion: "Estructuras metálicas diseñadas para naves industriales o bodegas.",
        caracteristicas: [
          "Diseño modular expandible",
          "Preparadas para instalación de paneles solares",
          "Alta resistencia a cargas de viento",
          "Instalación profesional",
        ],
        imagen: "/Images/FirstM/3/Estructura.png",
      },
    ],
  },

  {
    id: "accesos-soportes",
    nombre: "Accesos y Soportes",
    productos: [
      {
        id: "1",
        nombre: "Escaleras plataforma",
        descripcion: "Escaleras seguras con superficies antideslizantes para uso industrial.",
        caracteristicas: [
          "Diseño modular y desmontable",
          "Peldaños antideslizantes",
          "Opciones con ruedas de seguridad",
          "Pintura anticorrosiva",
        ],
        imagen: "/Images/FirstM/4/Escalera.png",
      },
      {
        id: "2",
        nombre: "Barandales y pasamanos",
        descripcion: "Elementos que garantizan seguridad con acabados estéticos.",
        caracteristicas: [
          "Diseños en acero inoxidable o al carbono",
          "Opciones decorativas o minimalistas",
          "Instalación en escaleras y balcones",
          "Cumplimiento con normativas de seguridad",
        ],
        imagen: "/Images/FirstM/4/Barandal.png",
      },
      {
        id: "3",
        nombre: "Rampas metálicas",
        descripcion: "Soluciones prácticas para accesibilidad y carga de mercancías.",
        caracteristicas: [
          "Estructura reforzada en acero",
          "Capacidad de carga personalizada",
          "Superficie antideslizante",
          "Opciones fijas o móviles",
        ],
        imagen: "/Images/FirstM/4/Rampa.png",
      },
      {
        id: "4",
        nombre: "Plataformas de trabajo",
        descripcion: "Espacios seguros para mantenimiento y operación industrial.",
        caracteristicas: [
          "Estructura robusta y estable",
          "Superficie antiderrapante",
          "Diseño modular expandible",
          "Opciones con barandales integrados",
        ],
        imagen: "/Images/FirstM/4/Plataforma.png",
      },
    ],
  },

  {
    id: "decorativos-funcionales",
    nombre: "Decorativos y Funcionales",
    productos: [
      {
        id: "1",
        nombre: "Canceles y divisiones metálicas",
        descripcion: "Soluciones modernas para dividir espacios sin perder estética.",
        caracteristicas: [
          "Diseños industriales o minimalistas",
          "Acabados en pintura horneada",
          "Opciones fijas o corredizas",
          "Vidrio o panel metálico integrado",
        ],
        imagen: "/Images/FirstM/5/Cancel.png",
      },
      {
        id: "2",
        nombre: "Muebles metálicos personalizados",
        descripcion: "Piezas funcionales y resistentes adaptadas a cada necesidad.",
        caracteristicas: [
          "Fabricación en acero y madera combinada",
          "Acabados modernos y duraderos",
          "Personalización en medidas y colores",
        ],
        imagen: "/Images/FirstM/5/Mueble.png",
      },
      {
        id: "3",
        nombre: "Letras y letreros CNC",
        descripcion: "Identidad visual con cortes de precisión en acero, aluminio o acrílico.",
        caracteristicas: [
          "Corte en plasma, láser o router CNC",
          "Opciones con iluminación LED",
          "Personalización en tamaño y estilo",
          "Acabados pintados o pulidos",
        ],
        imagen: "/Images/FirstM/5/CNC.png",
      },
      {
        id: "4",
        nombre: "Soportes metálicos para señalización",
        descripcion: "Estructuras resistentes diseñadas para publicidad o señalética.",
        caracteristicas: [
          "Acero galvanizado con recubrimiento protector",
          "Modelos para interior o exterior",
          "Opciones desmontables o fijas",
          "Instalación profesional incluida",
        ],
        imagen: "/Images/FirstM/5/Soporte.png",
      },
    ],
  },

  {
    id: "fabricaciones-medida",
    nombre: "Fabricaciones a medida",
    productos: [
      {
        id: "1",
        nombre: "Jaulas para transporte",
        descripcion: "Diseños resistentes para traslado seguro de materiales o animales.",
        caracteristicas: [
          "Estructura metálica reforzada",
          "Opciones con ruedas y puertas dobles",
          "Protección anticorrosiva",
          "Personalización en tamaño y acabados",
        ],
        imagen: "/Images/FirstM/6/Jaula.png",
      },
      {
        id: "2",
        nombre: "Contenedores metálicos",
        descripcion: "Solución práctica para almacenamiento y transporte industrial.",
        caracteristicas: [
          "Diseño modular y apilable",
          "Alta resistencia al impacto",
          "Disponibles en varias capacidades",
          "Pintura protectora contra oxidación",
        ],
        imagen: "/Images/FirstM/6/Contenedor.png",
      },
      {
        id: "3",
        nombre: "Chasis para maquinaria",
        descripcion: "Estructuras metálicas diseñadas para soportar equipos industriales.",
        caracteristicas: [
          "Diseño según especificaciones técnicas",
          "Soldadura de alta precisión",
          "Preparación para montaje de motores",
          "Durabilidad a cargas pesadas",
        ],
        imagen: "/Images/FirstM/6/Chasis.png",
      },
      {
        id: "4",
        nombre: "Racks para manejo de materiales",
        descripcion: "Organización eficiente para almacenes y áreas de producción.",
        caracteristicas: [
          "Diseños industriales de gran capacidad",
          "Opciones fijas o desmontables",
          "Recubrimiento en pintura electrostática",
          "Estructura ligera pero resistente",
        ],
        imagen: "/Images/FirstM/6/Rack.png",
      },
    ],
  },
];



