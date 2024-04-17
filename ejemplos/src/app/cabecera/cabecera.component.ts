import { Component } from '@angular/core';
import { TituloComponent } from '../titulo.component';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [TituloComponent],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent {

}
