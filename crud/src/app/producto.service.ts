import { Injectable } from '@angular/core';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productos: Producto[] = [
    { id: 1, nombre: 'Monitor', precio: 123.45 },
    { id: 2, nombre: 'Portátil', precio: 1234.56 },
    { id: 3, nombre: 'Ratón', precio: 12.34 },
  ];

  obtenerTodos(): Producto[] {
    return this.productos;
  }
}
