import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {DefaultLayoutComponent} from './default-layout.component';
import {DataTweetsApiService} from './datatweets-api.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [DataTweetsApiService]
})
export class DefaultLayoutModule {
}