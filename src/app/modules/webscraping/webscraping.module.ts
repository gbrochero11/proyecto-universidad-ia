import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebscrapingRoutingModule } from './webscraping-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { WebscrapingComponent } from './page/webscraping.component';


@NgModule({
  declarations: [WebscrapingComponent],
  imports: [
    CommonModule,
    WebscrapingRoutingModule,
    NgxSpinnerModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class WebscrapingModule { }
