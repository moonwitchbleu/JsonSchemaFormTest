import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'radio-field-type',
    template: `
    <div class="form-group">
    <label *ngIf="to.label" class="col-2">{{ to.label }} {{to.required ? " * " : ""}}</label>
    <div class="input-group">
        <div *ngFor="let option of to.options;let i = index;" class="col-10">
          <input placeholder="{{ to.placeholder }}"  [formControl]="formControl" [formlyAttributes]="field" value="{{option}}" type="radio">
          <label class="col-10">{{option.label}}</label>
        </div>
    </div>
    <p *ngIf="to.description">{{ to.description }}</p>
    </div>
  `,
})
export class RadioTypeComponent extends FieldType {
    defaultOptions = {
        defaultValue: {},
    };
}
