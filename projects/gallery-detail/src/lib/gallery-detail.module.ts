import { NgModule } from '@angular/core';
import { GalleryDetailComponent } from './gallery-detail.component';
import { OverlayModule } from '@angular/cdk/overlay';
// TODO change to outer import import ... from 'gallery'
import { GalleryModule } from 'projects/gallery/src/public-api';

@NgModule({
  declarations: [GalleryDetailComponent],
  entryComponents: [GalleryDetailComponent],
  imports: [OverlayModule, GalleryModule],
  exports: [GalleryDetailComponent]
})
export class GalleryDetailModule {}
