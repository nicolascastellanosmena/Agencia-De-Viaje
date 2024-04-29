export interface Destinos {
  continentes: Continente[]
}

export interface Continente {
  nombre: string
  descripcion: string
  destinos: Destino[]
}

export interface Destino {
  nombre: string
  pais: string
  descripcion: string
  atracciones: string[]
  imagen: string
  precio: number
  calificacion: number
  hoteles: Hoteles[]
}

export interface Hoteles {
  nombre: string
  ubicacion: string
  precio_minimo: number
  precio_maximo: number
  calificacion: number
  servicios: string[]
}
