import { Component, inject } from '@angular/core';
import { OpcionMenu } from './tipos/opcion-menu';
import { MenuService } from './servicios/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo?: OpcionMenu;
  opciones?: OpcionMenu[];

  servicio = inject(MenuService);

  constructor() {
    this.servicio.obtenerTodos().subscribe(
      opciones => {
        console.log(opciones);
        
        this.titulo = opciones[0];
        this.opciones = opciones.slice(1);
      }
    )
  }
}
