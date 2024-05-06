import { Component } from '@angular/core';
import { Video } from '../../tipos/video';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrl: './ficha.component.css'
})
export class FichaComponent {
  video: Video = {
    id: 1,
    descripcion: 'La Guerra de las Galaxias',
    foto: 'https://i.ytimg.com/vi_webp/4d_kg3tmDpQ/movieposter.webp',
    horas: 2,
    minutos: 10,
    segundos: 5,
    titulo: 'StarWars',
    codigo: '4d_kg3tmDpQ'
  }
}
