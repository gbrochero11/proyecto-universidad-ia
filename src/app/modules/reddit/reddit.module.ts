import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RedditRoutingModule } from './reddit-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RedditComponent } from './page/reddit.component';


@NgModule({
  declarations: [RedditComponent],
  imports: [
    CommonModule,
    RedditRoutingModule,
    NgxSpinnerModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class RedditModule { }
