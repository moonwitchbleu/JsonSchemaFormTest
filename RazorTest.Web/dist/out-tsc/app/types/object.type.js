import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
let ObjectTypeComponent = class ObjectTypeComponent extends FieldType {
    constructor() {
        super(...arguments);
        this.defaultOptions = {
            defaultValue: {},
        };
    }
};
ObjectTypeComponent = __decorate([
    Component({
        selector: 'formly-object-type',
        template: `
    <div class="mb-3">
      <legend *ngIf="to.label">{{ to.label }}</legend>
      <p *ngIf="to.description">{{ to.description }}</p>
      <div class="alert alert-danger" role="alert" *ngIf="showError && formControl.errors">
        <formly-validation-message [field]="field"></formly-validation-message>
      </div>
      <formly-field *ngFor="let f of field.fieldGroup" [field]="f"></formly-field>
    </div>
  `,
    })
], ObjectTypeComponent);
export { ObjectTypeComponent };
//# sourceMappingURL=object.type.js.map