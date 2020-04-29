import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { HomeLandingComponent } from '../home-landing/home-landing.component';
import { HomeLandingModule } from '../home-landing/home-landing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CompanyRoutingModule,
  ]
})
export class CompanyModule { }