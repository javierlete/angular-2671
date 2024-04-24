import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  ruta = inject(ActivatedRoute);
  servicio = inject(ProductoService);

  form = new FormGroup({
    id: new FormControl(0),
    nombre: new FormControl(''),
    precio: new FormControl(0),
  });

  constructor() {
    const id = Number(this.ruta.snapshot.params['id']);

    if (id) {
      this.servicio.obtenerPorId(id).then(
        productoRecibido => this.form.setValue(productoRecibido)
      );
    }
  }
}
