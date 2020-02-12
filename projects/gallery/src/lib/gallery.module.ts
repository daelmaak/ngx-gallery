import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GalleryComponent } from './components/gallery/gallery.component';
import { ChevronIconComponent } from './components/icons/chevron/chevron-icon.component';
import { ImageCounterComponent } from './components/image-counter/image-counter.component';
import { ImageViewerComponent } from './components/image-viewer/image-viewer.component';
import { ThumbnailsComponent } from './components/thumbnails/thumbnails.component';
import { NoMoveClickDirective } from './directives/no-move-click.directive';

@NgModule({
  declarations: [
    GalleryComponent,
    ThumbnailsComponent,
    ImageViewerComponent,
    ChevronIconComponent,
    NoMoveClickDirective,
    ImageCounterComponent
  ],
  imports: [CommonModule],
  exports: [GalleryComponent]
})
export class GalleryModule {}
