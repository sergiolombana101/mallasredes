import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MisionRoutingModule } from './mision-routing.module';
import { MisionComponent } from './mision.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { NavBarModule } from '../../nav-bar.module';


@NgModule({
  declarations: [MisionComponent],
  imports: [
    CommonModule,
    MisionRoutingModule,
    NavBarModule
  ]
})
export class MisionModule { }