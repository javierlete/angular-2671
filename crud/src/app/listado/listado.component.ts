import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Producto } from '../producto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  productos: Producto[] = [
    { id: 1, nombre: 'Monitor', precio: 123.45 },
    { id: 2, nombre: 'Portátil', precio: 1234.56 },
    { id: 3, nombre: 'Ratón', precio: 12.34 },
  ];
}
