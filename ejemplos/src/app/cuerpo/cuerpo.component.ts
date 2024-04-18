import { Component } from '@angular/core';
import { LabelInputComponent } from '../labelinput.component';
import { ContadorComponent } from '../contador.component';

@Component({
  selector: 'app-cuerpo',
  standalone: true,
  imports: [LabelInputComponent, ContadorComponent],
  templateUrl: './cuerpo.component.html',
  styleUrl: './cuerpo.component.css'
})
export class CuerpoComponent {

}
