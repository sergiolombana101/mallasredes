import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanelInicioComponent } from './panel-inicio.component';

const routes: Routes = [{ path: '', component: PanelInicioComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelInicioRoutingModule { }
