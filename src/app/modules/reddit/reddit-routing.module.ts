import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedditComponent } from './page/reddit.component';

const routes: Routes = [
  {path:'', component: RedditComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RedditRoutingModule { }
