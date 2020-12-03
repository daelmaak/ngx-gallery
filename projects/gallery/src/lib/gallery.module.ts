import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CounterComponent } from './components/counter/counter.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ChevronIconComponent } from './components/icons/chevron/chevron-icon.component';
import { ThumbsComponent } from './components/thumbs/thumbs.component';
import { ViewerComponent } from './components/viewer/viewer.component';
import { SafePipe } from './pipes/safe.pipe';
import { MediaDirective } from './directives/media.directive';

@NgModule({
  declarations: [
    GalleryComponent,
    ThumbsComponent,
    ViewerComponent,
    ChevronIconComponent,
    CounterComponent,
    SafePipe,
    MediaDirective,
  ],
  imports: [CommonModule],
  exports: [GalleryComponent, MediaDirective],
})
export class GalleryModule {}
