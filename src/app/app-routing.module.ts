import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLandingComponent } from './components/home-landing/home-landing.component';
import { HomeRoutingComponent } from './components/home-routing/home-routing.component';
import { CommonModule } from '@angular/common';



const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/home-routing/home-routing.module').then(m=>m.HomeRoutingModule),
    data: {kind:'update'}
  },
  {
    path: 'nosotros',
    loadChildren: () => import('./components/nosotros/nosotros.module').then(m=>m.NosotrosModule),
    data: {kind:'update'}
  },
  {
    path: 'mision',
    loadChildren: () => import('./components/mision/mision.module').then(m=>m.MisionModule),
    data : {kind:'update'}
  },
  {
    path: 'vision',
    loadChildren: () => import('./components/vision/vision.module').then(m=>m.VisionModule),
    data : {kind:'update'}
  },
  {
    path: 'contactanos',
    loadChildren: () => import('./components/contact/contact.module').then(m=>m.ContactModule),
    data : {kind:'update'}
  },
  {
    path: 'productos',
    loadChildren: () => import('./components/product-routing/product-routing.module').then(m=>m.ProductRoutingModule),
    data : {kind:'update'}
  },
  {
    path: 'clientes',
    loadChildren: () => import('./components/clientes/clientes.module').then(m=>m.ClientesModule),
    data : {kind:'update'}
  },
  {
    path: 'product-details',
    loadChildren: () => import('./components/product-details/product-details.module').then(m=>m.ProductDetailsModule),
    data : {kind:'update'}
  },
  {
    path: 'productos/:section',
    loadChildren: () => import('./components/product-routing/product-routing.module').then(m=>m.ProductRoutingModule),
    data: {kind:'update'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
