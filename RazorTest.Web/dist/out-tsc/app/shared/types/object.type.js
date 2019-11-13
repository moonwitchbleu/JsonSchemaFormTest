import { __decorate, __extends } from "tslib";
import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
var ObjectTypeComponent = /** @class */ (function (_super) {
    __extends(ObjectTypeComponent, _super);
    function ObjectTypeComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultOptions = {
            defaultValue: {},
        };
        return _this;
    }
    ObjectTypeComponent = __decorate([
        Component({
            selector: 'formly-object-type',
            template: "\n    <div class=\"mb-3\">\n      <legend *ngIf=\"to.label\">{{ to.label }}</legend>\n      <p *ngIf=\"to.description\">{{ to.description }}</p>\n      <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"showError && formControl.errors\">\n        <formly-validation-message [field]=\"field\"></formly-validation-message>\n      </div>\n      <formly-field *ngFor=\"let f of field.fieldGroup\" [field]=\"f\"></formly-field>\n    </div>\n  ",
        })
    ], ObjectTypeComponent);
    return ObjectTypeComponent;
}(FieldType));
export { ObjectTypeComponent };
//# sourceMappingURL=object.type.js.map