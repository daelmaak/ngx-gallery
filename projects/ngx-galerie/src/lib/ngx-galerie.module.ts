import { NgModule } from '@angular/core';
import { NgxGalerieComponent } from './ngx-galerie.component';
import { CommonModule } from '@angular/common';
import { NgxThumbnailsComponent } from './components/ngx-thumbnails/ngx-thumbnails.component';

@NgModule({
  declarations: [NgxGalerieComponent, NgxThumbnailsComponent],
  imports: [CommonModule],
  exports: [NgxGalerieComponent]
})
export class NgxGalerieModule {}
