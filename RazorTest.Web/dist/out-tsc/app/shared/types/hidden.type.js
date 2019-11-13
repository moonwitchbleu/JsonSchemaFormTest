import { __decorate, __extends } from "tslib";
import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
var HiddenTypeComponent = /** @class */ (function (_super) {
    __extends(HiddenTypeComponent, _super);
    function HiddenTypeComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultOptions = {
            defaultValue: {},
        };
        return _this;
    }
    HiddenTypeComponent = __decorate([
        Component({
            selector: 'hidden-field-type',
            template: "<label *ngIf=\"to.label\" style=\"display:none\">{{ to.label }} {{to.required ? \" * \" : \"\"}}</label>\n    <p *ngIf=\"to.description\">{{ to.description }}</p>\n    <div class=\"input-group\">\n        <input class=\"form-control\" placeholder=\"{{ to.placeholder }}\" [formControl]=\"formControl\" [formlyAttributes]=\"field\"\n              type=\"hidden\">\n    </div>\n",
        })
    ], HiddenTypeComponent);
    return HiddenTypeComponent;
}(FieldType));
export { HiddenTypeComponent };
//# sourceMappingURL=hidden.type.js.map