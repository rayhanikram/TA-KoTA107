import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MapstreammerComponent } from './mapstreammer.component';

const routes: Routes = [
  {
    path: '',
    component: MapstreammerComponent,
    data: {
      title: 'Map Streammer'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapstreammerRoutingModule {}
