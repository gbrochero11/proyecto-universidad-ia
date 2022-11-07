import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './page/home.component';
import {SharedModule} from '../shared/shared.module';
import {AppModule} from '../../app.module';
import {HomeRoutingModule} from './home-routing.module';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
