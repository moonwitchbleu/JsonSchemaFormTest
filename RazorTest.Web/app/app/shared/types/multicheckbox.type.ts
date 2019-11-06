import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'multicheckbox-field-type',
    template: `
    <div *ngFor="let option of to.options;let i = index;">
          <input type="checkbox"
           [id]="id + '_' + i"
           [formlyAttributes]="field"
           [value]="option.value"
           [checked]="isChecked(formControl.value, option.value)"
           (change)="onChange(option.value, $event.target.checked)">
          <label class="col-10">{{option.label}}</label>
        </div>
    <p *ngIf="to.description">{{ to.description }}</p>
  `,
})
export class MulticheckboxTypeComponent extends FieldType {
    onChange(value, checked) {
       if (checked) {
            this.formControl.value.push(value);
        } else {
           let index = this.formControl.value.findIndex(o => JSON.stringify(o) === JSON.stringify(value));

           if(index >= 0)
                this.formControl.value.splice(index, 1);
        }
    }

    isChecked(fcValue, optValue): boolean {
        if (fcValue) {
            let fcOption = fcValue.find(function (o) { return JSON.stringify(o) === JSON.stringify(optValue) });

            if (fcOption)
                return true;
        }

        return false;
    }
}
