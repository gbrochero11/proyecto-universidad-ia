import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from '../../shared/components/header/header.component';
import {RouterModule} from '@angular/router';
import {CarouselComponent} from '../../shared/components/carousel/carousel.component';


@NgModule({
  declarations: [
    HeaderComponent,
    CarouselComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    CarouselComponent,
  ]
})
export class SharedModule { }
