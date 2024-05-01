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
  imagen: string
  precio: number
  calificacion: number
  hoteles: Hotele[]
}

export interface Hotele {
  nombre: string
  ubicacion: string
  precio_minimo: number
  precio_maximo: number
  calificacion: number
  servicios: string[]
}
