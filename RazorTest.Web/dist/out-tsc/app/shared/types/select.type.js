import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
let SelectTypeComponent = class SelectTypeComponent extends FieldType {
    compareFn(val1, val2) {
        return (JSON.stringify(val1) === JSON.stringify(val2));
    }
};
SelectTypeComponent = __decorate([
    Component({
        selector: 'select-field-type',
        template: `
    <select [formControl]="formControl" [formlyAttributes]="field" class="form-control col-4" multiple *ngIf="to.multiple" [compareWith]="compareFn">
        <option *ngFor="let option of to.options;let i = index;" [ngValue]="option.value" 
            >{{option.label}}</option>
    </select>
    <select [formControl]="formControl" [formlyAttributes]="field" class="form-control col-4" *ngIf="!to.multiple" [compareWith]="compareFn">
        <option *ngFor="let option of to.options;let i = index;" [ngValue]="option.value" 
            >{{option.label}}</option>
    </select>
    <p *ngIf="to.description">{{ to.description }}</p>
  `,
    })
], SelectTypeComponent);
export { SelectTypeComponent };
//# sourceMappingURL=select.type.js.map