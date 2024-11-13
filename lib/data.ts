export const categorias = [
  {
    titulo: "Numerología",
    descripcion: "Descubre el significado místico de los números en tu vida",
    temasRecientes: 156,
    totalPublicaciones: 2341,
    subcategorias: [
      { titulo: "Números Maestros", descripcion: "Significado y poder de los números 11, 22 y 33" },
      { titulo: "Nombre y Destino", descripcion: "Cálculo del número del nombre y su influencia" },
      { titulo: "Ciclos Numerológicos", descripcion: "Años personales y ciclos vitales" }
    ]
  },
  {
    titulo: "Tarot",
    descripcion: "Explora la antigua sabiduría de las cartas del tarot",
    temasRecientes: 243,
    totalPublicaciones: 3567,
    subcategorias: [
      { titulo: "Arcanos Mayores", descripcion: "Las 22 cartas principales del tarot" },
      { titulo: "Tiradas y Spreads", descripcion: "Diferentes métodos de lectura" },
      { titulo: "Interpretación Avanzada", descripcion: "Significados profundos y combinaciones" }
    ]
  },
  {
    titulo: "Horóscopo",
    descripcion: "Predicciones astrológicas diarias, semanales y mensuales",
    temasRecientes: 189,
    totalPublicaciones: 4123,
    subcategorias: [
      { titulo: "Predicciones Diarias", descripcion: "Horóscopo del día para cada signo" },
      { titulo: "Compatibilidad", descripcion: "Relaciones entre signos zodiacales" },
      { titulo: "Tránsitos Actuales", descripcion: "Influencias planetarias del momento" }
    ]
  },
  {
    titulo: "Astrología",
    descripcion: "Profundiza en las influencias celestiales y cartas natales",
    temasRecientes: 312,
    totalPublicaciones: 5678,
    subcategorias: [
      { titulo: "Carta Natal", descripcion: "Análisis del mapa astral personal" },
      { titulo: "Casas Astrológicas", descripcion: "Las 12 casas y sus significados" },
      { titulo: "Aspectos Planetarios", descripcion: "Relaciones entre planetas" }
    ]
  },
  {
    titulo: "Hechizos",
    descripcion: "Aprende sobre prácticas mágicas y rituales",
    temasRecientes: 145,
    totalPublicaciones: 1987,
    subcategorias: [
      { titulo: "Rituales de Luna", descripcion: "Magia según las fases lunares" },
      { titulo: "Velas y Colores", descripcion: "Uso de velas en rituales" },
      { titulo: "Hierbas Mágicas", descripcion: "Propiedades esotéricas de las plantas" }
    ]
  },
  {
    titulo: "Sueños",
    descripcion: "Interpreta los significados ocultos en tus sueños",
    temasRecientes: 278,
    totalPublicaciones: 3456,
    subcategorias: [
      { titulo: "Símbolos Oníricos", descripcion: "Significado de símbolos comunes" },
      { titulo: "Sueños Premonitorios", descripcion: "Predicciones a través de sueños" },
      { titulo: "Sueños Lúcidos", descripcion: "Control consciente de los sueños" }
    ]
  },
  {
    titulo: "Cristales y Gemas",
    descripcion: "El poder sanador de las piedras preciosas",
    temasRecientes: 167,
    totalPublicaciones: 2890,
    subcategorias: [
      { titulo: "Propiedades Curativas", descripcion: "Uso de cristales para sanar" },
      { titulo: "Limpieza y Carga", descripcion: "Mantenimiento de cristales" },
      { titulo: "Grids y Geometría", descripcion: "Disposición de cristales" }
    ]
  },
  {
    titulo: "Chakras y Energía",
    descripcion: "Equilibrio y sanación energética",
    temasRecientes: 198,
    totalPublicaciones: 3245,
    subcategorias: [
      { titulo: "Los 7 Chakras", descripcion: "Centros energéticos principales" },
      { titulo: "Meditación", descripcion: "Técnicas de equilibrio energético" },
      { titulo: "Reiki", descripcion: "Sanación mediante energía universal" }
    ]
  },
  {
    titulo: "Runas",
    descripcion: "Sabiduría ancestral nórdica",
    temasRecientes: 134,
    totalPublicaciones: 1876,
    subcategorias: [
      { titulo: "Futhark Antiguo", descripcion: "24 runas tradicionales" },
      { titulo: "Tiradas Rúnicas", descripcion: "Métodos de consulta" },
      { titulo: "Magia Rúnica", descripcion: "Uso mágico de las runas" }
    ]
  },
  {
    titulo: "Registros Akáshicos",
    descripcion: "Acceso a la memoria universal",
    temasRecientes: 156,
    totalPublicaciones: 2134,
    subcategorias: [
      { titulo: "Lectura de Registros", descripcion: "Técnicas de acceso" },
      { titulo: "Maestros y Guías", descripcion: "Contacto con seres superiores" },
      { titulo: "Vidas Pasadas", descripcion: "Exploración de encarnaciones" }
    ]
  },
  {
    titulo: "Péndulo y Radiestesia",
    descripcion: "Arte de la adivinación mediante péndulo",
    temasRecientes: 145,
    totalPublicaciones: 1987,
    subcategorias: [
      { titulo: "Uso del Péndulo", descripcion: "Técnicas básicas y avanzadas" },
      { titulo: "Mapas y Búsqueda", descripcion: "Radiestesia aplicada" },
      { titulo: "Sanación con Péndulo", descripcion: "Equilibrio energético" }
    ]
  }
]

export type Usuario = {
  id: string
  nombre: string
  email: string
  avatar?: string
  rol: 'usuario' | 'moderador' | 'admin'
  fechaRegistro: Date
  ultimoAcceso: Date
}

export type Publicacion = {
  id: string
  titulo: string
  contenido: string
  autorId: string
  categoriaId: string
  subcategoriaId: string
  fechaCreacion: Date
  fechaActualizacion: Date
  vistas: number
  respuestas: number
}

export type Respuesta = {
  id: string
  contenido: string
  autorId: string
  publicacionId: string
  fechaCreacion: Date
  fechaActualizacion: Date
}