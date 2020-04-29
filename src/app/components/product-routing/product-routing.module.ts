import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingRoutingModule } from './product-routing-routing.module';
import { ProductRoutingComponent } from './product-routing.component';
import { ProductLandingComponent } from '../product-landing/product-landing.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { NavBarModule } from '../../nav-bar.module';
import { ProductsComponent } from '../products/products.component';
import { ProductsSection2Component } from '../products-section-2/products-section-2.component';



@NgModule({
  declarations: [ProductRoutingComponent,ProductLandingComponent,ProductsComponent,ProductsSection2Component],
  imports: [
    CommonModule,
    ProductRoutingRoutingModule,
    NavBarModule
  ]
})
export class ProductRoutingModule { }
