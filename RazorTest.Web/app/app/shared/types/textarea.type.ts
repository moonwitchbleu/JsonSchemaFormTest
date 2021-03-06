﻿import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'textarea-field-type',
    template: `
    <textarea class="form-control" placeholder="{{ to.placeholder }}" [formControl]="formControl" [formlyAttributes]="field" rows="4"></textarea>

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
