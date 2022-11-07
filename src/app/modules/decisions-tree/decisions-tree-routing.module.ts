import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DecisionsTreeComponent} from './page/decisions-tree.component';

const routes: Routes = [
  {path:'',component:DecisionsTreeComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DecisionsTreeRoutingModule {

}
