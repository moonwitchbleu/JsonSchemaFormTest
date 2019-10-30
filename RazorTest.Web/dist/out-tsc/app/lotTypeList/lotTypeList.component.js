import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LotTypeListComponent = class LotTypeListComponent {
    constructor(data) {
        this.data = data;
        this.title = 'Lot Type List';
        this.lotTypes = [];
    }
    ngOnInit() {
        this.data.loadLotTypes()
            .subscribe(lotTypes => {
            this.lotTypes = lotTypes;
        });
    }
};
LotTypeListComponent = __decorate([
    Component({
        selector: 'lot-type-list',
        templateUrl: './lotTypeList.component.html',
        styleUrls: ['../app.component.css']
    })
], LotTypeListComponent);
export { LotTypeListComponent };
//# sourceMappingURL=lotTypeList.component.js.map