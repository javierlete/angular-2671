import { Component, Input } from '@angular/core';
import { OpcionMenu } from '../../tipos/opcion-menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @Input() expandir?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' = 'sm';
  @Input() titulo?: OpcionMenu = { etiqueta: 'TITULO', vinculo: '' };
  @Input() opcionesMenu?: OpcionMenu[] = [];
}
