import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
let HiddenTypeComponent = class HiddenTypeComponent extends FieldType {
    constructor() {
        super(...arguments);
        this.defaultOptions = {
            defaultValue: {},
        };
    }
};
HiddenTypeComponent = __decorate([
    Component({
        selector: 'hidden-field-type',
        template: `<label *ngIf="to.label" style="display:none">{{ to.label }} {{to.required ? " * " : ""}}</label>
    <p *ngIf="to.description">{{ to.description }}</p>
    <div class="input-group">
        <input class="form-control" placeholder="{{ to.placeholder }}" [formControl]="formControl" [formlyAttributes]="field"
              type="hidden">
    </div>
`,
    })
], HiddenTypeComponent);
export { HiddenTypeComponent };
//# sourceMappingURL=hidden.type.js.map