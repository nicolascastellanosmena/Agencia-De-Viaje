export interface Destinos {
  continentes: Continente[]
}

export interface Continente {
  nombre: string
  descripcion: string
  titulo: string
  slogan: string
  imagenes_destacadas: ImagenesDestacada[]
  destinos: Destino[]
}

export interface ImagenesDestacada {
  img1: string
  img2: string
  img3: string
}

export interface Destino {
  nombre: string
  pais: string
  descripcion: string
  atracciones: string[]
  imagenes_pais: ImagenesPai[]
  precio: number
  calificacion: number
  hoteles: Hotele[]
  imagen?: string
}

export interface ImagenesPai {
  img1: string
  img2: string
  img3: string
}

export interface Hotele {
  nombre: string
  ubicacion: string
  precio_minimo: number
  precio_maximo: number
  calificacion: number
  imagen:string
  servicios: string[]
}
