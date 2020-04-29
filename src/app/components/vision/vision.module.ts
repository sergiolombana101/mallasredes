import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisionRoutingModule } from './vision-routing.module';
import { VisionComponent } from './vision.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { NavBarModule } from '../../nav-bar.module';


@NgModule({
  declarations: [VisionComponent],
  imports: [
    CommonModule,
    VisionRoutingModule,
    NavBarModule
  ]
})
export class VisionModule { }