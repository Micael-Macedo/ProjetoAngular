import { Component } from '@angular/core';
import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CursoDetalheComponent],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {

}
