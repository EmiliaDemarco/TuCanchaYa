import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CATEGORIAS } from 'src/app/core/constants/categoria';
import { Producto } from 'src/app/core/interface/productos';
import { CarritoService } from 'src/app/core/services/carrito.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
  router = inject(Router)

  constructor (
    private activatedRoute : ActivatedRoute,
    // inyectamos carrito
    private carritoService: CarritoService
    ) { 
      //me suscribo a los cambios del parametro
      activatedRoute.params.subscribe(params => {
        console.log(params)
        CATEGORIAS.forEach(categoria =>{
         const productoEncontrado = categoria.productos.find(producto => producto.id == params['id']);
          if(productoEncontrado){
            this.producto = productoEncontrado
          }
        })
       })
    }

  ngOnInit() {
  }

  producto: Producto = {
    id: 0,
    nombre: "",
    precio: 0,
    direccion: [],
    imagen: "",
  }

  cantidad = 1;
  
  onAgregarAlCarritoClicked(){
    this.carritoService.agregarProducto(this.producto,this.cantidad);
    console.log (this.carritoService.carrito);
    this.router.navigate(['tabs/tab3']);
  }
}
