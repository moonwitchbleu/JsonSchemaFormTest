import { __decorate, __extends } from "tslib";
import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
var MultiSchemaTypeComponent = /** @class */ (function (_super) {
    __extends(MultiSchemaTypeComponent, _super);
    function MultiSchemaTypeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MultiSchemaTypeComponent = __decorate([
        Component({
            selector: 'formly-multi-schema-type',
            template: "\n    <div class=\"card mb-3\">\n      <div class=\"card-body\">\n        <legend *ngIf=\"to.label\">{{ to.label }}</legend>\n        <p *ngIf=\"to.description\">{{ to.description }}</p>\n        <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"showError && formControl.errors\">\n          <formly-validation-message [field]=\"field\"></formly-validation-message>\n        </div>\n        <formly-field *ngFor=\"let f of field.fieldGroup\" [field]=\"f\"></formly-field>\n      </div>\n    </div>\n  ",
        })
    ], MultiSchemaTypeComponent);
    return MultiSchemaTypeComponent;
}(FieldType));
export { MultiSchemaTypeComponent };
//# sourceMappingURL=multischema.type.js.map