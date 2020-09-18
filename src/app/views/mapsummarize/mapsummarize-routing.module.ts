import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MapsummarizeComponent } from './mapsummarize.component';

const routes: Routes = [
  {
    path: '',
    component:MapsummarizeComponent,
    data: {
      title: 'Map Summarize'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsummarizeRoutingModule {}
