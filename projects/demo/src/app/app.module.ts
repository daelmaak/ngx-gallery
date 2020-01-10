import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GalleryModule } from 'projects/gallery/src/public-api';
import { GalleryDetailModule } from 'projects/gallery-detail/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GalleryModule, GalleryDetailModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
