import { __decorate, __extends } from "tslib";
import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
var MulticheckboxTypeComponent = /** @class */ (function (_super) {
    __extends(MulticheckboxTypeComponent, _super);
    function MulticheckboxTypeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MulticheckboxTypeComponent.prototype.onChange = function (value, checked) {
        if (checked) {
            this.formControl.value.push(value);
        }
        else {
            var index = this.formControl.value.findIndex(function (o) { return JSON.stringify(o) === JSON.stringify(value); });
            if (index >= 0)
                this.formControl.value.splice(index, 1);
        }
    };
    MulticheckboxTypeComponent.prototype.isChecked = function (fcValue, optValue) {
        if (fcValue) {
            var fcOption = fcValue.find(function (o) { return JSON.stringify(o) === JSON.stringify(optValue); });
            if (fcOption)
                return true;
        }
        return false;
    };
    MulticheckboxTypeComponent = __decorate([
        Component({
            selector: 'multicheckbox-field-type',
            template: "\n    <div *ngFor=\"let option of to.options;let i = index;\">\n          <input type=\"checkbox\"\n           [id]=\"id + '_' + i\"\n           [formlyAttributes]=\"field\"\n           [value]=\"option.value\"\n           [checked]=\"isChecked(formControl.value, option.value)\"\n           (change)=\"onChange(option.value, $event.target.checked)\">\n          <label class=\"col-10\">{{option.label}}</label>\n        </div>\n    <p *ngIf=\"to.description\">{{ to.description }}</p>\n  ",
        })
    ], MulticheckboxTypeComponent);
    return MulticheckboxTypeComponent;
}(FieldType));
export { MulticheckboxTypeComponent };
//# sourceMappingURL=multicheckbox.type.js.map