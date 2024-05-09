import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-valoracion',
  templateUrl: './valoracion.component.html',
  styleUrl: './valoracion.component.css'
})
export class ValoracionComponent {
  @Input() valoracion?: number;
  @Output() valoracionChange = new EventEmitter<number>();

  onCambio(numero: number) {
    this.valoracion = numero;
    this.valoracionChange.emit(numero);
  }
}
