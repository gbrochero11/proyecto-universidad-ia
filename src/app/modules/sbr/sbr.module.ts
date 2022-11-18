import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SbrComponent } from './page/sbr.component';
import {SbrRoutingModule} from './sbr-routing.module';
import { FormSbrComponent } from './page/form-sbr/form-sbr.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  declarations: [
    SbrComponent,
    FormSbrComponent
  ],
  imports: [
    CommonModule,
    SbrRoutingModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class SbrModule { }
