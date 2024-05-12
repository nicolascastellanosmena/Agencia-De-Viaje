export interface Descuento {
    promociones_vuelos: PromocionesVuelo[]
}

export interface PromocionesVuelo {
  codigo: string
  descuento: number
}
