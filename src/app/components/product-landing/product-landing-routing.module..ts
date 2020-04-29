import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductLandingComponent } from './product-landing.component';

const routes: Routes = [{ path: '', component: ProductLandingComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductLandingRoutingModule { }
