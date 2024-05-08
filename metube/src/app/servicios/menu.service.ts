import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { OpcionMenu } from '../tipos/opcion-menu';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  url = 'http://127.0.0.1:3000/menu/';
  http = inject(HttpClient);

  obtenerTodos(): Observable<OpcionMenu[]> {
    return this.http.get<OpcionMenu[]>(this.url);
  }
  
}
