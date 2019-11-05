import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
    selector: 'form-wrapper',
    template: `
    <div class="form-group">
    <div class="input-group">
        <label attr.for="{{key}}" *ngIf="to.label" class="col-2">{{ to.label }} {{to.required ? " * " : ""}}</label>
        
        <div class="col-10"><ng-container #fieldComponent></ng-container></div>
    </div>
    
    </div>
  `
})
export class FormWrapperComponent extends FieldWrapper {
    @ViewChild('fieldComponent', { read: ViewContainerRef, static: true }) fieldComponent: ViewContainerRef;
}