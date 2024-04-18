import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'contador',
    template: '<button (click)="onBotonPulsado()">{{numero}}</button>',
    standalone: true,
})
export class ContadorComponent {
    @Input('inicial') numero = 0;
    @Output() cambioNumero = new EventEmitter<number>();

    onBotonPulsado() {
        this.numero++;
        this.cambioNumero.emit(this.numero);
    }
}
