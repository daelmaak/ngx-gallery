import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ThumbnailsComponent } from './components/thumbnails/thumbnails.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ImageViewerComponent } from './components/image-viewer/image-viewer.component';
import { ChevronIconComponent } from './components/icons/chevron/chevron-icon.component';

@NgModule({
  declarations: [
    GalleryComponent,
    ThumbnailsComponent,
    ImageViewerComponent,
    ChevronIconComponent
  ],
  imports: [CommonModule],
  exports: [GalleryComponent]
})
export class GalleryModule {}
