import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TituloComponent } from './titulo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TituloComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemplos';
}
