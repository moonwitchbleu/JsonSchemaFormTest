import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'select-field-type',
    template: `
<select [formControl]="formControl" [formlyAttributes]="field" class="form-control col-4">
    <option *ngFor="let option of to.options;let i = index;" [value]="option.value" ng-reflect-ng-value="Black">{{option.value}}</option>
    </select>
    <p *ngIf="to.description">{{ to.description }}</p>
  `,
})
export class SelectTypeComponent extends FieldType {
    defaultOptions = {
        defaultValue: {},
    };
}
