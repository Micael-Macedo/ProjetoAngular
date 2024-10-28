import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MeuPrimeiro2Component } from "./meu-primeiro2/meu-primeiro2.component";
import { CursosComponent } from "./cursos/cursos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MeuPrimeiro2Component,
    CursosComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  //Serviços de verificação de autenticação
  providers: []
})
export class AppComponent {
  title = 'primeiro-projeto';
}
