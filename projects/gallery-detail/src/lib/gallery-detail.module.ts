import { NgModule } from '@angular/core';
import { GalleryDetailComponent } from './components/gallery-detail/gallery-detail.component';
import { OverlayModule } from '@angular/cdk/overlay';
// TODO change to outer import import ... from 'gallery'
import { GalleryModule } from 'projects/gallery/src/public-api';
import { CommonModule } from '@angular/common';
import { CloseIconComponent } from './components/icons/close-icon/close-icon.component';

@NgModule({
  declarations: [GalleryDetailComponent, CloseIconComponent],
  entryComponents: [GalleryDetailComponent],
  imports: [CommonModule, OverlayModule, GalleryModule],
  exports: [GalleryDetailComponent]
})
export class GalleryDetailModule {}
