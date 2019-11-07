import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs/operators";
import { LotType } from "./lotType";
import { Observable, forkJoin } from 'rxjs';

@Injectable()
export class DataService {
    constructor(private http: HttpClient) {

    }

    public lotTypeSchema: {};
    public lotTypes: LotType[] = [];
    public lotType: LotType;
    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };

    loadLotTypeData(lotTypeId: number): Observable<any> {
        return forkJoin([this.loadLotTypeSchema(), this.loadLotType(lotTypeId)]);
    }

    loadLotTypeSchema(): Observable<any> {
        return this.http.get<any>("/api/lotType/lotTypeSchema")
            .pipe(
                map((data) => {
                    this.lotTypeSchema = JSON.parse(data);
                    console.log("Schema", this.lotTypeSchema);
                    return this.lotTypeSchema;
                })
            )
    }

    loadLotTypes(): Observable<LotType[]> {
        return this.http.get("/api/lotType/")
            .pipe(
                map((data: any[]) => {
                    console.log('Lot Types: ', data);
                    this.lotTypes = data;
                    return this.lotTypes;
                })
            )
    }

    loadLotType(lotTypeId: number): Observable<LotType> {
        return this.http.get<any>("/api/lotType/" + lotTypeId)
            .pipe(
                map((data) => {
                    this.lotType = data;
                    console.log('Lot Type: ', this.lotType);
                    return this.lotType;
                })
            )
    }

    saveLotType(lotType: any) {
        return this.http.post("/api/lotType/saveLotType", lotType, this.httpOptions)
            .pipe(
                map((data: any[]) => {
                    console.log("save result: ", data);
                    return true;
                })
            )
    }

    getAgentDetails(agentUserCode: string): string {
        return agentUserCode + " Name";
    }
}