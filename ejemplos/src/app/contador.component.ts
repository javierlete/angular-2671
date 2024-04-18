import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'contador',
    template: `
        <button (click)="onBotonPulsado()">{{numero}}</button>
        <button (click)="onResetearPulsado()">Resetear</button>
    `,
    standalone: true,
})
export class ContadorComponent {
    @Input('inicial') numero = 0;
    @Output() cambioNumero = new EventEmitter<number>();

    onResetearPulsado() {
        this.numero = 0;
        this.cambioNumero.emit(this.numero);
    }

    onBotonPulsado() {
        this.numero++;

        if(this.numero > 10) {
            this.numero = 0;
        }

        this.cambioNumero.emit(this.numero);
    }
}
