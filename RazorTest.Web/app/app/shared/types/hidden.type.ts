import { Component } from '@angular/core';
import { FieldType, FormlyField } from '@ngx-formly/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';

@Component({
    selector: 'hidden-field-type',
    template: `<label *ngIf="to.label" style="display:none">{{ to.label }} {{to.required ? " * " : ""}}</label>
    <p *ngIf="to.description">{{ to.description }}</p>
    <div class="input-group">
        <input class="form-control" placeholder="{{ to.placeholder }}" [formControl]="formControl" [formlyAttributes]="field"
              type="hidden">
    </div>
`,
})
export class HiddenTypeComponent extends FieldType {
    defaultOptions = {
        defaultValue: {},
    };
}
