import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { PanelInicioRoutingModule } from './panel-inicio-routing.module';
import { PanelInicioComponent } from './panel-inicio.component';
import { NavBarModule } from '../nav-bar.module';
import { PlaceholderComponent } from '../placeholder/placeholder.component';


@NgModule({
  declarations: [PanelInicioComponent],
  imports: [
    CommonModule,
    PanelInicioRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NavBarModule
  ]
})
export class PanelInicioModule { }