import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from '../../containers/default-layout/api.service';
import { CommonModule } from '@angular/common'
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    HttpClientModule,
    CommonModule,
    ButtonsModule.forRoot()
  ],
  providers: [ApiService],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }
