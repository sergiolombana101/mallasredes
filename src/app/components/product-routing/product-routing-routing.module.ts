import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductRoutingComponent } from './product-routing.component';

const routes: Routes = [{ path: '', component: ProductRoutingComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingRoutingModule { }
