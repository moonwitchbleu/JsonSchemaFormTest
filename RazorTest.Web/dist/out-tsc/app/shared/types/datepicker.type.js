import { __decorate, __extends } from "tslib";
import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
var DatepickerTypeComponent = /** @class */ (function (_super) {
    __extends(DatepickerTypeComponent, _super);
    function DatepickerTypeComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultOptions = {
            defaultValue: {},
        };
        return _this;
    }
    DatepickerTypeComponent = __decorate([
        Component({
            selector: 'datepicker-field-type',
            template: "\n    <input class=\"form-control col-4\" placeholder=\"{{ to.placeholder }}\" [formControl]=\"formControl\" [formlyAttributes]=\"field\" type=\"date\">\n    <p *ngIf=\"to.description\">{{ to.description }}</p>\n\n    <div class=\"invalid-feedback\" style=\"display: block;\" *ngIf=\"showError && formControl.errors\">\n        <formly-validation-message [field]=\"field\"></formly-validation-message>\n    </div>",
        })
    ], DatepickerTypeComponent);
    return DatepickerTypeComponent;
}(FieldType));
export { DatepickerTypeComponent };
//# sourceMappingURL=datepicker.type.js.map