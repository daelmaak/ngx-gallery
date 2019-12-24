import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DetailViewModule } from 'detail-view';
import { GalleryModule } from 'gallery';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GalleryModule, DetailViewModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
