import { Injectable } from '@angular/core';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url = 'http://127.0.0.1:3000/productos/';

  async obtenerTodos(): Promise<Producto[]> {
    const respuesta = await fetch(this.url);
    return respuesta.json();
  }
}
