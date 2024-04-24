import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud';
}
