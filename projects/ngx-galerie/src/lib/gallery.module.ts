import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ThumbnailsComponent } from './components/thumbnails/thumbnails.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ImageViewerComponent } from './components/image-viewer/image-viewer.component';

@NgModule({
  declarations: [GalleryComponent, ThumbnailsComponent, ImageViewerComponent],
  imports: [CommonModule],
  exports: [GalleryComponent]
})
export class GalleryModule {}
