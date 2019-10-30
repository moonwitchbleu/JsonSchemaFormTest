import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldType, FormlyField, FieldWrapper } from '@ngx-formly/core';

@Component({
    selector: 'formly-panel-wrapper',
    template: `
    <h3 class="title">{{ to.label }}</h3>
  `
})
export class PanelWrapperComponent extends FieldWrapper {
}