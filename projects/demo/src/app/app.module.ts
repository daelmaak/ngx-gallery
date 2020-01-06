import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GalleryModule } from '@ngx-galerie/gallery';
import { GalleryDetailModule } from '@ngx-galerie/gallery-detail';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GalleryModule, GalleryDetailModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
