import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GalleryModule } from '@ngx-galerie/gallery';
import { GalleryDetailComponent } from './components/gallery-detail/gallery-detail.component';
import { CloseIconComponent } from './components/icons/close-icon/close-icon.component';

@NgModule({
  declarations: [GalleryDetailComponent, CloseIconComponent],
  entryComponents: [GalleryDetailComponent],
  imports: [CommonModule, OverlayModule, GalleryModule]
})
export class GalleryDetailModule {}
