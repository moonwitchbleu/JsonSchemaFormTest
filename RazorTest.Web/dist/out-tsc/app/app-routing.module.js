import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LotTypeComponent } from './lotType/lotType.component';
import { LotTypeListComponent } from './lotTypeList/lotTypeList.component';
const routes = [
    { path: '', redirectTo: 'lot-type-list', pathMatch: 'full' },
    { path: 'lot-type/:id', component: LotTypeComponent },
    { path: 'lot-type-list', component: LotTypeListComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes, {
                useHash: true
            })],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map