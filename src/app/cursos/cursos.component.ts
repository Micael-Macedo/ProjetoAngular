import { Component, OnInit } from '@angular/core';
import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cursos',
  standalone: true,
  //É necessário importar o NgFor para exibir o array
  imports: [CursoDetalheComponent, NgFor],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent implements OnInit {

  //nome da variável:tipo de variável
  //Para definir de qualquer tipo utilize o any
  nomePortal: string

  //Como Definir listas de algum tipo
  cursos: string[] = ['Java', 'Ext JS', 'Angular']


  constructor() {
    this.nomePortal = "http://loiane.training"

  }

  ngOnInit() {

  }
}
