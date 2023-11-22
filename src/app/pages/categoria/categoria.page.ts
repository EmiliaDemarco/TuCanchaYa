import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CATEGORIAS } from 'src/app/core/constants/categoria';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {

  constructor(
    //servicio
    private activatedRoute : ActivatedRoute
    ) { 
      //me suscribo a los cambios del parametro
      activatedRoute.params.subscribe(params => {
        console.log(params)
        if(params['id'])   {
          const categoriaEncontrada = CATEGORIAS.find (categoria => categoria.id == params['id']);
          if(categoriaEncontrada){
            this.categoria = categoriaEncontrada
          }
        }  
       })
    }

  ngOnInit() {
  }

  categoria = CATEGORIAS[0];
  
}
