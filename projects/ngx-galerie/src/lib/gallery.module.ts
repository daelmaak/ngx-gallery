import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ThumbnailsComponent } from './components/thumbnails/thumbnails.component';
import { GalleryComponent } from './components/gallery/gallery.component';

@NgModule({
  declarations: [GalleryComponent, ThumbnailsComponent],
  imports: [CommonModule],
  exports: [GalleryComponent]
})
export class GalleryModule {}
