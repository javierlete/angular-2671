import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TituloComponent } from './titulo.component';
import { LabelInputComponent } from './labelinput.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TituloComponent, LabelInputComponent, CabeceraComponent, PieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemplos';
}
