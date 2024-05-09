import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-label-input',
  templateUrl: './label-input.component.html',
  styleUrl: './label-input.component.css'
})
export class LabelInputComponent {
  @Input() id?: string;
  @Input() etiqueta?: string = '';
  @Input() tipo?: string = 'text';

  @Input() valor?: string | number = '';
  @Output() valorChange = new EventEmitter<string | number>();

  onCambio(valor: string) {
    const numero = parseFloat(valor as string);
    
    if(numero) {
      this.valorChange.emit(numero);
      return;
    }

    this.valorChange.emit(valor);
  }
}
