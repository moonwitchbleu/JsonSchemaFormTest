import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormlyField } from '@ngx-formly/core';

@Component({
    selector: 'formly-datepicker-type',
    template: `
<div class="form-group">
 <label *ngIf="to.label">{{ to.label }}</label>
    <p *ngIf="to.description">{{ to.description }}</p>
    <div class="input-group">
        <input class="form-control" placeholder="{{ to.placeholder }}" [formControl]="formControl" [formlyAttributes]="field"
               name="dp" ngbDatepicker #d="ngbDatepicker">
        <div class="input-group-append">
            <button class="btn btn-outline-secondary calendar" (click)="d.toggle()" type="button"></button>
        </div>
    </div>

    <div class="invalid-feedback" style="display: block;" *ngIf="showError && formControl.errors">
        <formly-validation-message [field]="field"></formly-validation-message>
    </div>
</div>
  `,
})
export class DatepickerTypeComponent extends FieldType {
    defaultOptions = {
        defaultValue: {},
    };
}
