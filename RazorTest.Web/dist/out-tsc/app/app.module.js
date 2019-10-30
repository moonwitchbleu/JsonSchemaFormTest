import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ArrayTypeComponent } from './shared/types/array.type';
import { ObjectTypeComponent } from './shared/types/object.type';
import { MultiSchemaTypeComponent } from './shared/types/multischema.type';
import { NullTypeComponent } from './shared/types/null.type';
import { DatepickerTypeComponent } from './shared/types/datepicker.type';
import { PanelWrapperComponent } from './shared/wrappers/formlyPanel.wrapper';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LotTypeListComponent } from './lotTypeList/lotTypeList.component';
import { LotTypeComponent } from './lotType/lotType.component';
import { APP_BASE_HREF } from '@angular/common';
import { DataService } from './shared/data.service';
export function minItemsValidationMessage(err, field) {
    return `should NOT have fewer than ${field.templateOptions.minItems} items`;
}
export function maxItemsValidationMessage(err, field) {
    return `should NOT have more than ${field.templateOptions.maxItems} items`;
}
export function minlengthValidationMessage(err, field) {
    return `should NOT be shorter than ${field.templateOptions.minLength} characters`;
}
export function maxlengthValidationMessage(err, field) {
    return `should NOT be longer than ${field.templateOptions.maxLength} characters`;
}
export function minValidationMessage(err, field) {
    return `should be >= ${field.templateOptions.min}`;
}
export function maxValidationMessage(err, field) {
    return `should be <= ${field.templateOptions.max}`;
}
export function multipleOfValidationMessage(err, field) {
    return `should be multiple of ${field.templateOptions.step}`;
}
export function exclusiveMinimumValidationMessage(err, field) {
    return `should be > ${field.templateOptions.step}`;
}
export function exclusiveMaximumValidationMessage(err, field) {
    return `should be < ${field.templateOptions.step}`;
}
export function constValidationMessage(err, field) {
    return `should be equal to constant "${field.templateOptions.const}"`;
}
export function patternValidationMessage(err, field) {
    return `${field.templateOptions.label} is invalid.`;
}
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            LotTypeListComponent,
            LotTypeComponent,
            ArrayTypeComponent,
            ObjectTypeComponent,
            MultiSchemaTypeComponent,
            NullTypeComponent,
            DatepickerTypeComponent,
            PanelWrapperComponent,
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            HttpClientModule,
            ReactiveFormsModule,
            FormlyBootstrapModule,
            NgbModule,
            FormlyModule.forRoot({
                validationMessages: [
                    { name: 'required', message: 'This field is required' },
                    { name: 'null', message: 'should be null' },
                    { name: 'minlength', message: minlengthValidationMessage },
                    { name: 'maxlength', message: maxlengthValidationMessage },
                    { name: 'min', message: minValidationMessage },
                    { name: 'max', message: maxValidationMessage },
                    { name: 'multipleOf', message: multipleOfValidationMessage },
                    { name: 'exclusiveMinimum', message: exclusiveMinimumValidationMessage },
                    { name: 'exclusiveMaximum', message: exclusiveMaximumValidationMessage },
                    { name: 'minItems', message: minItemsValidationMessage },
                    { name: 'maxItems', message: maxItemsValidationMessage },
                    { name: 'uniqueItems', message: 'should NOT have duplicate items' },
                    { name: 'const', message: constValidationMessage },
                    { name: 'pattern', message: patternValidationMessage }
                ],
                types: [
                    { name: 'string', extends: 'input' },
                    {
                        name: 'number',
                        extends: 'input',
                        defaultOptions: {
                            templateOptions: {
                                type: 'number',
                            },
                        },
                    },
                    {
                        name: 'integer',
                        extends: 'input',
                        defaultOptions: {
                            templateOptions: {
                                type: 'number',
                            },
                        },
                    },
                    { name: 'boolean', extends: 'checkbox' },
                    { name: 'enum', extends: 'select' },
                    { name: 'null', component: NullTypeComponent, wrappers: ['form-field'] },
                    { name: 'array', component: ArrayTypeComponent },
                    { name: 'object', component: ObjectTypeComponent },
                    { name: 'multischema', component: MultiSchemaTypeComponent },
                    {
                        name: 'datepicker',
                        component: DatepickerTypeComponent,
                    }
                ],
            })
        ],
        providers: [DataService,
            { provide: APP_BASE_HREF, useValue: '/' }
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map