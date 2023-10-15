import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './page/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent,
  children:[
    {path:'webscraping', loadChildren:()=> import('../webscraping/webscraping.module')
        .then(module => module.WebscrapingModule)},
    {path:'dashboard', loadChildren:()=> import('../dashboard/dashboard.module')
        .then(module => module.DashboardModule)},
    {path:'reddit', loadChildren:()=> import('../reddit/reddit.module')
        .then(module => module.RedditModule)},
  ]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule {

}
