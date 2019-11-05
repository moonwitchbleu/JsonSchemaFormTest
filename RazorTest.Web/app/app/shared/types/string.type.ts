import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormlyField } from '@ngx-formly/core';

@Component({
    selector: 'string-field-type',
    template: `
    <input class="form-control" placeholder="{{ to.placeholder }}" [formControl]="formControl" [formlyAttributes]="field" [type]="field.type" >

    <div class="invalid-feedback" style="display: block;" *ngIf="showError && formControl.errors">
        <formly-validation-message [field]="field"></formly-validation-message>
    </div>
  `,
})
export class StringTypeComponent extends FieldType {
    defaultOptions = {
        defaultValue: {},
    };
}
