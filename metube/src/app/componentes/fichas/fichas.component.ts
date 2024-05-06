import { Component } from '@angular/core';
import { VIDEOS } from '../../mocks/mock-videos';

@Component({
  selector: 'app-fichas',
  templateUrl: './fichas.component.html',
  styleUrl: './fichas.component.css'
})
export class FichasComponent {
  videos = VIDEOS;
}
