import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeLandingComponent } from './home-landing.component';

const routes: Routes = [{ path: '', component: HomeLandingComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeLandingRoutingModule { }
