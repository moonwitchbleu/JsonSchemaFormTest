import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LotTypeComponent } from './lotType/lotType.component';
import { LotTypeListComponent } from './lotTypeList/lotTypeList.component';


const routes: Routes = [
    { path: '', redirectTo: 'lot-type-list', pathMatch: 'full' }
    , { path: 'lot-type/:id', component: LotTypeComponent }
    , { path: 'lot-type-list', component: LotTypeListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        useHash: true 
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
