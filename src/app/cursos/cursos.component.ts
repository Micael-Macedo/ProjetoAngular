import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  standalone: true,
  //É necessário importar o NgFor para exibir o array
  imports: [CursoDetalheComponent, NgFor],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css',

  //Para utilizar os services
  providers: [CursosService]
})
export class CursosComponent implements OnInit {

  //nome da variável:tipo de variável
  //Para definir de qualquer tipo utilize o any
  nomePortal: string

  cursos: string []

  //Como Definir listas de algum tipo

  constructor(private cursoService: CursosService) {
    this.nomePortal = "http://loiane.training"

    this.cursos = this.cursoService.getCursos()

  }

  ngOnInit() {

  }
}
