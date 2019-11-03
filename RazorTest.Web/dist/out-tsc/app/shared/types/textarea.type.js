import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
let TextareaTypeComponent = class TextareaTypeComponent extends FieldType {
    constructor() {
        super(...arguments);
        this.defaultOptions = {
            defaultValue: {},
        };
    }
};
TextareaTypeComponent = __decorate([
    Component({
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
], TextareaTypeComponent);
export { TextareaTypeComponent };
//# sourceMappingURL=textarea.type.js.map