import { __decorate } from "tslib";
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
let FormWrapperComponent = class FormWrapperComponent extends FieldWrapper {
};
__decorate([
    ViewChild('fieldComponent', { read: ViewContainerRef, static: true })
], FormWrapperComponent.prototype, "fieldComponent", void 0);
FormWrapperComponent = __decorate([
    Component({
        selector: 'form-wrapper',
        template: `
    <div class="form-group">
    <div class="input-group">
        <label attr.for="{{key}}" *ngIf="to.label" class="col-2">{{ to.label }} {{to.required ? " * " : ""}}</label>
        
        <div class="col-10"><ng-container #fieldComponent></ng-container></div>
    </div>
    
    </div>
  `
    })
], FormWrapperComponent);
export { FormWrapperComponent };
//# sourceMappingURL=formlyPanel.wrapper.js.map