import { __decorate } from "tslib";
import { Component } from '@angular/core';
var LotTypeListComponent = /** @class */ (function () {
    function LotTypeListComponent(data) {
        this.data = data;
        this.title = 'Lot Type List';
        this.lotTypes = [];
    }
    LotTypeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.loadLotTypes()
            .subscribe(function (lotTypes) {
            _this.lotTypes = lotTypes;
        });
    };
    LotTypeListComponent = __decorate([
        Component({
            selector: 'lot-type-list',
            templateUrl: './lotTypeList.component.html',
            styleUrls: ['../app.component.css']
        })
    ], LotTypeListComponent);
    return LotTypeListComponent;
}());
export { LotTypeListComponent };
//# sourceMappingURL=lotTypeList.component.js.map