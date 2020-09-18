import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import {HttpClientModule} from '@angular/common/http';

import { CommonModule } from '@angular/common'



import { MapsummarizeComponent } from './mapsummarize.component';
import { MapsummarizeRoutingModule } from './mapsummarize-routing.module';

@NgModule({
  imports: [
    FormsModule,
    MapsummarizeRoutingModule,
    ChartsModule,
    HttpClientModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAzTivYAotoSAGbNuYGD4O8teFoxlgPmTg'
    }),
    AgmJsMarkerClustererModule
  ],
  declarations: [ MapsummarizeComponent ]
})
export class MapsummarizeModule { }
