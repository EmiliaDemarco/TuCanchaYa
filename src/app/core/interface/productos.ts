//interface es la forma que le vamos a dar, las caracteristicas que debe cumplir cada producto. 
export interface Producto {
    id: number
    nombre: string
    precio: number
    direccion: string[]
    imagen: string
}