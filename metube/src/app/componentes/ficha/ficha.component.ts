import { Component, Input, inject } from '@angular/core';
import { Video } from '../../tipos/video';
import { VideoService } from '../../servicios/video.service';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrl: './ficha.component.css'
})
export class FichaComponent {
  @Input() video?: Video;
  servicio = inject(VideoService);

  onValoracionChange(id: number, valoracion: number) {
    console.log(id, valoracion);

    this.servicio.cambiarValoracion(id, valoracion).subscribe(
      () => this.video!.valoracion = valoracion
    );
  }
}
