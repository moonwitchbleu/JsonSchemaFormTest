import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { LotType } from '../shared/lotType';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'lot-type-list',
    templateUrl: './lotTypeList.component.html',
    styleUrls: ['../app.component.css']
})
export class LotTypeListComponent implements OnInit {
    title = 'Lot Type List';

    public lotTypes: LotType[] = [];


    constructor(private data: DataService) {
    }

    ngOnInit(): void {
        this.data.loadLotTypes()
            .subscribe(lotTypes => {
                this.lotTypes = lotTypes;
            });
    }

}
