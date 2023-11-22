import { Injectable } from '@angular/core';
import { Carrito } from '../interface/carrito';
import { Producto } from '../interface/productos';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor() {
    const memoria = localStorage.getItem ("carrito");
    if(memoria) {
      this.carrito = JSON.parse(memoria);
      this.calcularTotal();
    };
  }

//metodo
  carrito:Carrito [] = []
totalCarrito: number = 0;
//propiedades  
  agregarProducto (producto:Producto, cantidad:number) {
    //parentesis = que necesita tener dicha propiedad
   const index = this.carrito.findIndex(item => item.producto.id === producto.id);
    if (index > -1){
      this.carrito[index].cantidad++;
    }
    else{
      this.carrito.push({
        producto: producto,
        cantidad: cantidad
    });
    }

    this.actualizarLocalStorage()
    this.calcularTotal()

  }

  
  eliminarProducto(id:number){
    this.carrito = this.carrito.filter(item => item.producto.id !== id);
    this.actualizarLocalStorage();
    this.calcularTotal()
    
  }
  limpiarCarrito(){
    this.carrito = [];
    this.actualizarLocalStorage()
    this.calcularTotal()
  }

  actualizarLocalStorage(){
    localStorage.setItem("carrito", JSON.stringify (this.carrito))
  }

  calcularTotal(){
    this.totalCarrito = 0;
    this.carrito.forEach(item => {
      this.totalCarrito = this.totalCarrito + item.producto.precio * item.cantidad;
     })
  }
  generarMensaje(){
    const primeraParte = "https://wa.me/+5412345678?text=";
    let parteProductos = ''
    this.carrito.forEach(itemCarrito => {
      parteProductos += `* ${itemCarrito.producto.nombre} - ${itemCarrito.cantidad}`
    });
    const ultimaParte = `Se realizó el siguiente pedido:
    Productos:
    ${parteProductos}
    Total: $${this.totalCarrito}
    Dirección de envío: DIRECCION DE EJEMPLO`;
    return encodeURI(primeraParte+ultimaParte);
  }


}


