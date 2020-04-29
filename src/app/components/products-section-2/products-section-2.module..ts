import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsSection2Component } from './products-section-2.component';

const routes: Routes = [{ path: '', component: ProductsSection2Component}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsSection2RoutingModule { }
