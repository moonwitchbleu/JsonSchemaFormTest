import { __decorate, __extends } from "tslib";
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
var FormWrapperComponent = /** @class */ (function (_super) {
    __extends(FormWrapperComponent, _super);
    function FormWrapperComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        ViewChild('fieldComponent', { read: ViewContainerRef, static: true })
    ], FormWrapperComponent.prototype, "fieldComponent", void 0);
    FormWrapperComponent = __decorate([
        Component({
            selector: 'form-wrapper',
            template: "\n    <div class=\"form-group\">\n    <div class=\"input-group\">\n        <label [for]=\"id\" *ngIf=\"to.label\" class=\"col-2\">{{ to.label }} {{to.required ? \" * \" : \"\"}}</label>\n        \n        <div class=\"col-10\"><ng-container #fieldComponent></ng-container></div>\n    </div>\n    \n    </div>\n  "
        })
    ], FormWrapperComponent);
    return FormWrapperComponent;
}(FieldWrapper));
export { FormWrapperComponent };
//# sourceMappingURL=formlyPanel.wrapper.js.map