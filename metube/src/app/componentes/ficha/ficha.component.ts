import { Component, Input } from '@angular/core';
import { Video } from '../../tipos/video';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrl: './ficha.component.css'
})
export class FichaComponent {
  @Input() video?: Video;
}
