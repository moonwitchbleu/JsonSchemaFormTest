import { __decorate } from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { forkJoin } from 'rxjs';
let DataService = class DataService {
    constructor(http) {
        this.http = http;
        this.lotTypes = [];
        this.httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }
    loadLotTypeData(lotTypeId) {
        return forkJoin([this.loadLotTypeSchema(), this.loadLotType(lotTypeId)]);
    }
    loadLotTypeSchema() {
        return this.http.get("/api/lotType/lotTypeSchema")
            .pipe(map((data) => {
            this.lotTypeSchema = JSON.parse(data);
            console.log("Schema", this.lotTypeSchema);
            return this.lotTypeSchema;
        }));
    }
    loadLotTypes() {
        return this.http.get("/api/lotType/")
            .pipe(map((data) => {
            console.log('Lot Types: ', data);
            this.lotTypes = data;
            return this.lotTypes;
        }));
    }
    loadLotType(lotTypeId) {
        return this.http.get("/api/lotType/" + lotTypeId)
            .pipe(map((data) => {
            this.lotType = data;
            console.log('Lot Type: ', this.lotType);
            return this.lotType;
        }));
    }
    saveLotType(lotType) {
        return this.http.post("/api/lotType/saveLotType", lotType, this.httpOptions)
            .pipe(map((data) => {
            console.log("save result: ", data);
            return true;
        }));
    }
};
DataService = __decorate([
    Injectable()
], DataService);
export { DataService };
//# sourceMappingURL=data.service.js.map