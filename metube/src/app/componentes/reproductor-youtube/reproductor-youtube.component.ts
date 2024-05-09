import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reproductor-youtube',
  templateUrl: './reproductor-youtube.component.html',
  styleUrl: './reproductor-youtube.component.css'
})
export class ReproductorYoutubeComponent {
  @Input() codigo!: string;
  @Input() titulo?: string = 'Video de YouTube';
  @Input() ratio?: '1x1' | '4x3' | '16x9' | '21x9' = '16x9';
}
