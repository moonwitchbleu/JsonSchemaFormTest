import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
let SelectTypeComponent = class SelectTypeComponent extends FieldType {
    constructor() {
        super(...arguments);
        this.defaultOptions = {
            defaultValue: {},
        };
    }
};
SelectTypeComponent = __decorate([
    Component({
        selector: 'select-field-type',
        template: `
<select [formControl]="formControl" [formlyAttributes]="field" class="form-control col-4" [multiple]="to.multiple">
    <option *ngFor="let option of to.options;let i = index;" [value]="option.value" ng-reflect-ng-value="Black">{{option.label}}</option>
    </select>
    <p *ngIf="to.description">{{ to.description }}</p>
  `,
    })
], SelectTypeComponent);
export { SelectTypeComponent };
//# sourceMappingURL=select.type.js.map