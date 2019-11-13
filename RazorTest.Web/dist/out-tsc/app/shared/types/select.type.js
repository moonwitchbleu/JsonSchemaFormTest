import { __decorate, __extends } from "tslib";
import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
var SelectTypeComponent = /** @class */ (function (_super) {
    __extends(SelectTypeComponent, _super);
    function SelectTypeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectTypeComponent.prototype.compareFn = function (val1, val2) {
        return (JSON.stringify(val1) === JSON.stringify(val2));
    };
    SelectTypeComponent = __decorate([
        Component({
            selector: 'select-field-type',
            template: "\n    <select [formControl]=\"formControl\" [formlyAttributes]=\"field\" class=\"form-control col-4\" multiple *ngIf=\"to.multiple\" [compareWith]=\"compareFn\">\n        <option *ngFor=\"let option of to.options;let i = index;\" [ngValue]=\"option.value\" \n            >{{option.label}}</option>\n    </select>\n    <select [formControl]=\"formControl\" [formlyAttributes]=\"field\" class=\"form-control col-4\" *ngIf=\"!to.multiple\" [compareWith]=\"compareFn\">\n        <option *ngFor=\"let option of to.options;let i = index;\" [ngValue]=\"option.value\" \n            >{{option.label}}</option>\n    </select>\n    <p *ngIf=\"to.description\">{{ to.description }}</p>\n  ",
        })
    ], SelectTypeComponent);
    return SelectTypeComponent;
}(FieldType));
export { SelectTypeComponent };
//# sourceMappingURL=select.type.js.map