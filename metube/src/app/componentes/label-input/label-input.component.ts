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

  onCambio(valor: string | number) {
    this.valorChange.emit(valor);
  }
}
