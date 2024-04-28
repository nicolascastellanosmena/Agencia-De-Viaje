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
}