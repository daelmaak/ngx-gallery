import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GalleryModule } from 'projects/gallery/src/public-api';
import { DetailViewModule } from 'projects/detail-view/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GalleryModule, DetailViewModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
