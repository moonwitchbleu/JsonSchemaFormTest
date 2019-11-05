import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
let StringTypeComponent = class StringTypeComponent extends FieldType {
    constructor() {
        super(...arguments);
        this.defaultOptions = {
            defaultValue: {},
        };
    }
};
StringTypeComponent = __decorate([
    Component({
        selector: 'string-field-type',
        template: `
    <input class="form-control" placeholder="{{ to.placeholder }}" [formControl]="formControl" [formlyAttributes]="field" [type]="field.type" >

    <div class="invalid-feedback" style="display: block;" *ngIf="showError && formControl.errors">
        <formly-validation-message [field]="field"></formly-validation-message>
    </div>
  `,
    })
], StringTypeComponent);
export { StringTypeComponent };
//# sourceMappingURL=string.type.js.map