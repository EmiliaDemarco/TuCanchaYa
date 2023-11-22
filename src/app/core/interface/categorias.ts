import { Producto } from "./productos"
export interface Categoria{
    nombre: string
    id: number
    imgUrl: string
    productos: Producto[]
    
}