import { Component, inject } from '@angular/core';
import { Video } from '../../tipos/video';
import { VIDEOS } from '../../mocks/mock-videos';
import { Location } from '@angular/common';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  location = inject(Location);

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
    VIDEOS.push(this.video);
    this.location.back();
  }
}
