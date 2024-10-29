import { Injectable } from '@angular/core';

//Decorator
@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos(){
    return ['Java', 'Ext JS', 'Angular']
  }
}
