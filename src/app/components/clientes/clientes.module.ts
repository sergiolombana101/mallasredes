import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { NavBarModule } from '../../nav-bar.module';


@NgModule({
  declarations: [ClientesComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    NavBarModule
  ]
})
export class ClientesModule { }