import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SbrComponent} from './page/sbr.component';

const routes: Routes = [
  {path:'', component:SbrComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class SbrRoutingModule {

}
