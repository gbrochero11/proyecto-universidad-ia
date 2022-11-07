import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SbrComponent } from './page/sbr.component';
import {SbrRoutingModule} from './sbr-routing.module';



@NgModule({
  declarations: [
    SbrComponent
  ],
  imports: [
    CommonModule,
    SbrRoutingModule
  ]
})
export class SbrModule { }
