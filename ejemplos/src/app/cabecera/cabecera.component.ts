import { Component } from '@angular/core';
import { TituloComponent } from '../titulo.component';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [TituloComponent, MenuComponent],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent {

}
