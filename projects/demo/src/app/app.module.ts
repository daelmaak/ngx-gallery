import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxGalerieModule } from 'projects/ngx-galerie/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxGalerieModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
