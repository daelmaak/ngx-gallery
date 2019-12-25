import { NgModule } from '@angular/core';
import { GalleryDetailComponent } from './gallery-detail.component';
import { OverlayModule } from '@angular/cdk/overlay';
// TODO change to outer import import ... from 'gallery'
import { GalleryModule } from 'projects/gallery/src/public-api';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [GalleryDetailComponent],
  entryComponents: [GalleryDetailComponent],
  imports: [CommonModule, OverlayModule, GalleryModule],
  exports: [GalleryDetailComponent]
})
export class GalleryDetailModule {}
