import { __decorate } from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { forkJoin } from 'rxjs';
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.lotTypes = [];
        this.httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }
    DataService.prototype.loadLotTypeData = function (lotTypeId) {
        return forkJoin([this.loadLotTypeSchema(), this.loadLotType(lotTypeId)]);
    };
    DataService.prototype.loadLotTypeSchema = function () {
        var _this = this;
        return this.http.get("/api/lotType/lotTypeSchema")
            .pipe(map(function (data) {
            _this.lotTypeSchema = JSON.parse(data);
            console.log("Schema", _this.lotTypeSchema);
            return _this.lotTypeSchema;
        }));
    };
    DataService.prototype.loadLotTypes = function () {
        var _this = this;
        return this.http.get("/api/lotType/")
            .pipe(map(function (data) {
            console.log('Lot Types: ', data);
            _this.lotTypes = data;
            return _this.lotTypes;
        }));
    };
    DataService.prototype.loadLotType = function (lotTypeId) {
        var _this = this;
        return this.http.get("/api/lotType/" + lotTypeId)
            .pipe(map(function (data) {
            _this.lotType = data;
            console.log('Lot Type: ', _this.lotType);
            return _this.lotType;
        }));
    };
    DataService.prototype.saveLotType = function (lotType) {
        return this.http.post("/api/lotType/saveLotType", lotType, this.httpOptions)
            .pipe(map(function (data) {
            console.log("save result: ", data);
            return true;
        }));
    };
    DataService.prototype.getAgentDetails = function (agentUserCode) {
        return agentUserCode + " Name";
    };
    DataService = __decorate([
        Injectable()
    ], DataService);
    return DataService;
}());
export { DataService };
//# sourceMappingURL=data.service.js.map