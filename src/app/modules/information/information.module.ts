import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationComponent } from './page/information.component';
import {InformationRoutingModule} from './information-routing.module';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [
    InformationComponent,
  ],
  imports: [
    CommonModule,
    InformationRoutingModule,
    SharedModule
  ]
})
export class InformationModule { }
