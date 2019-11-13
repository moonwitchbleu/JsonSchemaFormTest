import { __decorate, __extends } from "tslib";
import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
var RadioTypeComponent = /** @class */ (function (_super) {
    __extends(RadioTypeComponent, _super);
    function RadioTypeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RadioTypeComponent.prototype.isEqual = function (optValue, fcValue) {
        if (JSON.stringify(optValue) === JSON.stringify(fcValue))
            return true;
        return false;
    };
    RadioTypeComponent = __decorate([
        Component({
            selector: 'radio-field-type',
            template: "\n    <div *ngFor=\"let option of to.options;let i = index;\">\n          <input type=\"radio\" \n           [name]=\"to.name\"\n           [formControl]=\"formControl\" \n           [formlyAttributes]=\"field\"\n           [value]=\"option.value\" [checked]=\"this.isEqual(option.value, formControl.value)\">\n          <label class=\"col-10\">{{option.label}}</label>\n        </div>\n    <p *ngIf=\"to.description\">{{ to.description }}</p>\n  ",
        })
    ], RadioTypeComponent);
    return RadioTypeComponent;
}(FieldType));
export { RadioTypeComponent };
//# sourceMappingURL=radio.type.js.map