export interface Auth {
    usuarios: Usuario[]
}

export interface Usuario {
  id: number
  nombre: string
  apellido:string
  email: string
  contraseya: string
}

