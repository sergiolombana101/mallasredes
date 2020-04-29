import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingRoutingModule } from './home-routing-routing.module';
import { HomeRoutingComponent } from './home-routing.component';
import { HomeLandingComponent } from '../home-landing/home-landing.component';
import { HomeLandingModule } from '../home-landing/home-landing.module';
import { CompanyComponent } from '../company/company.component';
import { CompanyModule } from '../company/company.module';
import { NosotrosComponent } from '../nosotros/nosotros.component';
import { NosotrosModule } from '../nosotros/nosotros.module';
import { NavBarComponent } from '../nav-bar/nav-bar.component';


@NgModule({
  declarations: [HomeRoutingComponent,HomeLandingComponent,CompanyComponent],
  imports: [
    CommonModule,
    HomeRoutingRoutingModule,
    HomeLandingModule,
    CompanyModule,
    NosotrosModule
  ]
})
export class HomeRoutingModule { }
