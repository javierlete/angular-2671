import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Video } from '../../tipos/video';
import { VideoService } from '../../servicios/video.service';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrl: './reproductor.component.css'
})
export class ReproductorComponent {
  video?: Video;

  ruta = inject(ActivatedRoute);
  sanitizer = inject(DomSanitizer);
  servicio = inject(VideoService);

  constructor() {
    const id = Number(this.ruta.snapshot.params['id']);

    this.servicio.obtenerPorId(id).subscribe(
      videoRecibido => this.video = videoRecibido);
  }
}
