import { Component, inject } from '@angular/core';
import { Video } from '../../tipos/video';
import { Location } from '@angular/common';
import { VideoService } from '../../servicios/video.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  location = inject(Location);
  servicio = inject(VideoService);

  video: Video = {
    id: 0,
    foto: '',
    horas: 0,
    minutos: 0,
    segundos: 0,
    titulo: '',
    descripcion: '',
    codigo: ''
  };

  guardar() {
    console.log(this.video);

    this.servicio.alta(this.video).subscribe(
      () => this.location.back()
    );
  }
}
