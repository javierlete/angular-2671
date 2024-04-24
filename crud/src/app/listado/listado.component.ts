import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Producto } from '../producto';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  servicio: ProductoService = inject(ProductoService);
  productos: Producto[] = [];

  constructor() {
    this.servicio.obtenerTodos().then(productosRecibidos => this.productos = productosRecibidos);
  }
}
