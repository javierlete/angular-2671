import { Component } from "@angular/core";

@Component({
    selector: 'titulo',
    template: '<h1>{{texto}}</h1>',
    standalone: true,
})
export class TituloComponent {
    texto = 'Título personalizado';
}