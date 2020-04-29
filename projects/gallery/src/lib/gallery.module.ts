import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CounterComponent } from './components/counter/counter.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ChevronIconComponent } from './components/icons/chevron/chevron-icon.component';
import { ThumbnailsComponent } from './components/thumbnails/thumbnails.component';
import { ViewerComponent } from './components/viewer/viewer.component';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [
    GalleryComponent,
    ThumbnailsComponent,
    ViewerComponent,
    ChevronIconComponent,
    CounterComponent,
    SafePipe
  ],
  imports: [CommonModule, BrowserAnimationsModule],
  exports: [GalleryComponent]
})
export class GalleryModule {}
