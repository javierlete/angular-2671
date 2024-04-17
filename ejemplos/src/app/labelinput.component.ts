import { Component, Input } from "@angular/core";

@Component({
    selector: 'labelinput',
    template: `
        <div>
            <label>{{etiqueta}}</label>
            <input type="{{tipo}}" placeholder="{{etiqueta}}">
        </div>
    `,
    styles: 'label { display: inline-block; width: 10em; }',
    standalone: true,
})
export class LabelInputComponent {
    @Input() etiqueta = 'ETIQUETA';
    @Input() tipo = 'text';
}