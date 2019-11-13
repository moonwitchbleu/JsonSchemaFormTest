import { __decorate, __extends } from "tslib";
import { Component } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';
var ArrayTypeComponent = /** @class */ (function (_super) {
    __extends(ArrayTypeComponent, _super);
    function ArrayTypeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArrayTypeComponent = __decorate([
        Component({
            selector: 'formly-array-type',
            template: "\n  <div class=\"mb-3\">\n    <legend *ngIf=\"to.label\">{{ to.label }}</legend>\n    <p *ngIf=\"to.description\">{{ to.description }}</p>\n\n    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"showError && formControl.errors\">\n      <formly-validation-message [field]=\"field\"></formly-validation-message>\n    </div>\n\n    <div *ngFor=\"let field of field.fieldGroup;let i = index;\" class=\"row\">\n    <hr/>\n      <formly-field class=\"col-10\" [field]=\"field\"></formly-field>\n      <div class=\"col-2 text-right\">\n        <button class=\"btn btn-danger\" type=\"button\" (click)=\"remove(i)\">-</button>\n      </div>\n    </div>\n    <div class=\"d-flex flex-row-reverse\">\n      <button class=\"btn btn-primary\" type=\"button\" (click)=\"add()\">+</button>\n    </div>\n  </div>\n  ",
        })
    ], ArrayTypeComponent);
    return ArrayTypeComponent;
}(FieldArrayType));
export { ArrayTypeComponent };
//# sourceMappingURL=array.type.js.map