import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecisionsTreeComponent } from './page/decisions-tree.component';
import {DecisionsTreeRoutingModule} from './decisions-tree-routing.module';



@NgModule({
  declarations: [
    DecisionsTreeComponent
  ],
  imports: [
    CommonModule,
    DecisionsTreeRoutingModule
  ]
})
export class DecisionsTreeModule { }
