import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailpageComponent } from './detailpage/detailpage.component';
import { TvapplincesComponent } from './tvapplinces/tvapplinces.component';

const routes: Routes = [
  // {
  //   path:"",component:DashboardComponent
  // },
  {
    path:"tvapp",component:DetailpageComponent
  },
  {
    path:"",component:TvapplincesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
