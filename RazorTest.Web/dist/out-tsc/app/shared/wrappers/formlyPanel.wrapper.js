import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
let PanelWrapperComponent = class PanelWrapperComponent extends FieldWrapper {
};
PanelWrapperComponent = __decorate([
    Component({
        selector: 'formly-panel-wrapper',
        template: `
    <h3 class="title">{{ to.label }}</h3>
  `
    })
], PanelWrapperComponent);
export { PanelWrapperComponent };
//# sourceMappingURL=formlyPanel.wrapper.js.map