import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-valoracion',
  templateUrl: './valoracion.component.html',
  styleUrl: './valoracion.component.css'
})
export class ValoracionComponent {
  @Input() valoracion?: number;
  @Input() minimo = 0;
  @Input() maximo = 10;
  
  @Output() valoracionChange = new EventEmitter<number>();

  onCambio(numero: number) {
    if(numero >= this.minimo && numero <= this.maximo) {
      this.valoracion = numero;
      this.valoracionChange.emit(numero);
    }
  }
}
