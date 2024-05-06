import { Component, inject } from '@angular/core';
import { Video } from '../../tipos/video';
import { VideoService } from '../../servicios/video.service';

@Component({
  selector: 'app-fichas',
  templateUrl: './fichas.component.html',
  styleUrl: './fichas.component.css'
})
export class FichasComponent {
  videos: Video[] = [];
  servicio = inject(VideoService);

  constructor() {
    this.servicio.obtenerTodos().subscribe(
      videosRecibidos => this.videos = videosRecibidos);
  }
}
