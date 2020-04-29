import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosotrosRoutingModule } from './nosotros-routing.module';
import { NosotrosComponent } from './nosotros.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { NavBarModule } from '../../nav-bar.module';


@NgModule({
  declarations: [NosotrosComponent],
  imports: [
    CommonModule,
    NosotrosRoutingModule,
    NavBarModule
  ]
})
export class NosotrosModule { }