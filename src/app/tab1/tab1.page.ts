import { Component, OnInit } from '@angular/core';
import { Categoria } from '../core/interface/categorias';
import { CATEGORIAS } from '../core/constants/categoria';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  categorias: Categoria [] = CATEGORIAS;

}