import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'radio-field-type',
    template: `
    <div *ngFor="let option of to.options;let i = index;">
          <input type="radio" 
           [name]="to.name"
           [formControl]="formControl" 
           [formlyAttributes]="field"
           [value]="option.value" [checked]="this.isEqual(option.value, formControl.value)">
          <label class="col-10">{{option.label}}</label>
        </div>
    <p *ngIf="to.description">{{ to.description }}</p>
  `,
})
export class RadioTypeComponent extends FieldType {
    isEqual(optValue, fcValue) {
        if (JSON.stringify(optValue) === JSON.stringify(fcValue))
            return true;

        return false;
    }
}
