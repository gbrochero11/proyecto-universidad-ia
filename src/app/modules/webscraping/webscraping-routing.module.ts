import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebscrapingComponent } from './page/webscraping.component';

const routes: Routes = [
  {path:'', component: WebscrapingComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebscrapingRoutingModule { }
