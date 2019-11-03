import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormlyField } from '@ngx-formly/core';

@Component({
    selector: 'textarea-field-type',
    template: `
    <div class="input-group">
        <label attr.for="{{key}}" *ngIf="to.label" class="col-2">{{ to.label }} {{to.required ? " * " : ""}}</label>
        <textarea class="form-control" placeholder="{{ to.placeholder }}" [formControl]="formControl" [formlyAttributes]="field" rows="4"></textarea>
    </div>

    <div class="invalid-feedback" style="display: block;" *ngIf="showError && formControl.errors">
        <formly-validation-message [field]="field"></formly-validation-message>
    </div>
  `,
})
export class TextareaTypeComponent extends FieldType {
    defaultOptions = {
        defaultValue: {},
    };
}
