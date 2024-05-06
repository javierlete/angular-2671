import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { VIDEOS } from '../../mocks/mock-videos';
import { Video } from '../../tipos/video';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrl: './reproductor.component.css'
})
export class ReproductorComponent {
  video!: Video;
  urlVideo!: SafeResourceUrl;

  ruta = inject(ActivatedRoute);
  sanitizer = inject(DomSanitizer);

  constructor() {
    const id = Number(this.ruta.snapshot.params['id']);

    this.video = VIDEOS.find(v => v.id === id)!;
    this.urlVideo = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.video.codigo);
  }
}
