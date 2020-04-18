import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLandingComponent } from './components/home-landing/home-landing.component';
import { CommonModule } from '@angular/common';



const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/home-landing/home-landing.module').then(m=>m.HomeLandingModule),
    data: {kind:'update'}
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
