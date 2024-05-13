import { Component } from '@angular/core';
import { FosforitoDirective } from '../fosforito.directive';

@Component({
  selector: 'app-directivas',
  standalone: true,
  imports: [FosforitoDirective],
  templateUrl: './directivas.component.html',
  styleUrl: './directivas.component.css'
})
export class DirectivasComponent {

}
