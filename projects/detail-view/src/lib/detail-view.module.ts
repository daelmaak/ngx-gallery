import { NgModule } from '@angular/core';
import { DetailViewComponent } from './detail-view.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { GalleryModule } from 'gallery';

@NgModule({
  declarations: [DetailViewComponent],
  entryComponents: [DetailViewComponent],
  imports: [OverlayModule, GalleryModule],
  exports: [DetailViewComponent]
})
export class DetailViewModule {}
