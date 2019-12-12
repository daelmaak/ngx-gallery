import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ThumbnailsComponent } from './components/thumbnails/thumbnails.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ImageViewerComponent } from './components/image-viewer/image-viewer.component';
import { ChevronComponent } from './components/icons/chevron/chevron.component';

@NgModule({
  declarations: [
    GalleryComponent,
    ThumbnailsComponent,
    ImageViewerComponent,
    ChevronComponent
  ],
  imports: [CommonModule],
  exports: [GalleryComponent]
})
export class GalleryModule {}
