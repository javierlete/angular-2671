import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  saludo = 'Dime tu nombre para que te salude';
  saludar(texto: string) {
    this.saludo = 'Hola ' + texto;
  }
}
