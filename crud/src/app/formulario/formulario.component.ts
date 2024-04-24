import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  ruta = inject(ActivatedRoute);
  servicio = inject(ProductoService);
  
  constructor() {
    const id = Number(this.ruta.snapshot.params['id']);
    
    if(id) {
      this.servicio.obtenerPorId(id).then(productoRecibido => {
        console.log(productoRecibido);
      });
    }
  }
}
