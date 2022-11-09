import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './page/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent,
  children:[
    {path:'info', loadChildren:()=> import('../information/information.module')
        .then(module => module.InformationModule)},
    {path:'sbr', loadChildren:()=> import('../sbr/sbr.module')
        .then(module => module.SbrModule)},
    {path:'decisions-tree', loadChildren:()=> import('../decisions-tree/decisions-tree.module')
        .then(module => module.DecisionsTreeModule)},
    {path:'report', loadChildren:()=> import('../report/report.module')
        .then(module => module.ReportModule)},
  ]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule {

}
