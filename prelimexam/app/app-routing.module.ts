import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PartnerspageComponent } from './partnerspage/partnerspage.component';
import { JoinuspageComponent } from './joinuspage/joinuspage.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'partnerspage',
    component: PartnerspageComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'joinuspage',
    component: JoinuspageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
