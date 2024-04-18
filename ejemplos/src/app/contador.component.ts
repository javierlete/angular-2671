import { Component, Input } from "@angular/core";

@Component({
    selector: 'contador',
    template: '<button (click)="onBotonPulsado()">{{numero}}</button>',
    standalone: true,
})
export class ContadorComponent {
    @Input('inicial') numero = 0;

    onBotonPulsado() {
        this.numero++;
    }
}
