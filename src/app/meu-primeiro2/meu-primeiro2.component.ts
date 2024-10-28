import { Component } from '@angular/core';
import { CursosComponent } from "../cursos/cursos.component";

@Component({
  selector: 'app-meu-primeiro2',
  standalone: true,
  imports: [CursosComponent],
  templateUrl: './meu-primeiro2.component.html',
  styleUrl: './meu-primeiro2.component.css'
})
export class MeuPrimeiro2Component {

}
