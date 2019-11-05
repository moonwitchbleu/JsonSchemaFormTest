import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
let DatepickerTypeComponent = class DatepickerTypeComponent extends FieldType {
    constructor() {
        super(...arguments);
        this.defaultOptions = {
            defaultValue: {},
        };
    }
};
DatepickerTypeComponent = __decorate([
    Component({
        selector: 'datepicker-field-type',
        template: `
    <input class="form-control col-4" placeholder="{{ to.placeholder }}" [formControl]="formControl" [formlyAttributes]="field" type="date">
    <p *ngIf="to.description">{{ to.description }}</p>

    <div class="invalid-feedback" style="display: block;" *ngIf="showError && formControl.errors">
        <formly-validation-message [field]="field"></formly-validation-message>
    </div>`,
    })
], DatepickerTypeComponent);
export { DatepickerTypeComponent };
//# sourceMappingURL=datepicker.type.js.map