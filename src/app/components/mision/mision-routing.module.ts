import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisionComponent } from './mision.component';

const routes: Routes = [{ path: '', component: MisionComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MisionRoutingModule { }
