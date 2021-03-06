﻿import { Component } from '@angular/core';
import { FieldType, FormlyField } from '@ngx-formly/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';

@Component({
    selector: 'datepicker-field-type',
    template: `
    <input class="form-control col-4" placeholder="{{ to.placeholder }}" [formControl]="formControl" [formlyAttributes]="field" type="date">
    <p *ngIf="to.description">{{ to.description }}</p>

    <div class="invalid-feedback" style="display: block;" *ngIf="showError && formControl.errors">
        <formly-validation-message [field]="field"></formly-validation-message>
    </div>`,
})
export class DatepickerTypeComponent extends FieldType {
    defaultOptions = {
        defaultValue: {},
    };
}
