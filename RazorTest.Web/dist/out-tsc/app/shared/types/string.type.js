import { __decorate, __extends } from "tslib";
import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
var StringTypeComponent = /** @class */ (function (_super) {
    __extends(StringTypeComponent, _super);
    function StringTypeComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultOptions = {
            defaultValue: {},
        };
        return _this;
    }
    StringTypeComponent = __decorate([
        Component({
            selector: 'string-field-type',
            template: "\n    <input class=\"form-control\" placeholder=\"{{ to.placeholder }}\" [formControl]=\"formControl\" [formlyAttributes]=\"field\" [type]=\"field.type\" >\n\n    <div class=\"invalid-feedback\" style=\"display: block;\" *ngIf=\"showError && formControl.errors\">\n        <formly-validation-message [field]=\"field\"></formly-validation-message>\n    </div>\n  ",
        })
    ], StringTypeComponent);
    return StringTypeComponent;
}(FieldType));
export { StringTypeComponent };
//# sourceMappingURL=string.type.js.map