import { Component, Input } from "@angular/core";

@Component({
    selector: 'titulo',
    template: '<h1>{{texto}}</h1>',
    styles: `
        h1 {
            margin: 0;
            background-color: black;
            color: white;
            padding: 0.25rem;
            text-align: center;
        }`,
    standalone: true,
})
export class TituloComponent {
    @Input() texto = 'Título personalizado';
}