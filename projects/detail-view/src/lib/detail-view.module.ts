import { NgModule } from '@angular/core';
import { DetailViewComponent } from './detail-view.component';
import { OverlayModule } from '@angular/cdk/overlay';
// TODO change to outer import import ... from 'gallery'
import { GalleryModule } from 'projects/gallery/src/public-api';

@NgModule({
  declarations: [DetailViewComponent],
  entryComponents: [DetailViewComponent],
  imports: [OverlayModule, GalleryModule],
  exports: [DetailViewComponent]
})
export class DetailViewModule {}
