import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SbrComponent } from './page/sbr.component';
import {SbrRoutingModule} from './sbr-routing.module';
import { FormSbrComponent } from './page/form-sbr/form-sbr.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    SbrComponent,
    FormSbrComponent
  ],
  imports: [
    CommonModule,
    SbrRoutingModule,
    ReactiveFormsModule,
  ]
})
export class SbrModule { }
