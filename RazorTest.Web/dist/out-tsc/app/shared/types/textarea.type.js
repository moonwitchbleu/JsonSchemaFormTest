import { __decorate, __extends } from "tslib";
import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
var TextareaTypeComponent = /** @class */ (function (_super) {
    __extends(TextareaTypeComponent, _super);
    function TextareaTypeComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultOptions = {
            defaultValue: {},
        };
        return _this;
    }
    TextareaTypeComponent = __decorate([
        Component({
            selector: 'textarea-field-type',
            template: "\n    <textarea class=\"form-control\" placeholder=\"{{ to.placeholder }}\" [formControl]=\"formControl\" [formlyAttributes]=\"field\" rows=\"4\"></textarea>\n\n    <div class=\"invalid-feedback\" style=\"display: block;\" *ngIf=\"showError && formControl.errors\">\n        <formly-validation-message [field]=\"field\"></formly-validation-message>\n    </div>\n  ",
        })
    ], TextareaTypeComponent);
    return TextareaTypeComponent;
}(FieldType));
export { TextareaTypeComponent };
//# sourceMappingURL=textarea.type.js.map