import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AgmCoreModule } from '@agm/core';
import {HttpClientModule} from '@angular/common/http';

import { CommonModule } from '@angular/common'



import { MapstreammerComponent } from './mapstreammer.component';
import { MapstreammerRoutingModule } from './mapstreammer-routing.module';

@NgModule({
  imports: [
    FormsModule,
    MapstreammerRoutingModule,
    ChartsModule,
    HttpClientModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCwBolc5auzpYOhEjMPqM1bmwMoJfSlY_8'
    })
  ],
  declarations: [ MapstreammerComponent ]
})
export class MapstreammerModule { }
