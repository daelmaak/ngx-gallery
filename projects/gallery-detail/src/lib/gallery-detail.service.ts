import { Injectable } from '@angular/core';
import { Overlay, GlobalPositionStrategy } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { GalleryDetailComponent } from './components/gallery-detail/gallery-detail.component';
import { GalleryDetailRef } from './gallery-detail-ref';
import { GalleryDetailConfig } from './gallery-detail-config';

@Injectable({
  providedIn: 'root'
})
export class GalleryDetailService {
  constructor(private overlay: Overlay) {}

  open(selectedItemIndex = 0, config?: GalleryDetailConfig): GalleryDetailRef {
    const overlayRef = this.overlay.create({
      positionStrategy: new GlobalPositionStrategy()
        .centerHorizontally()
        .centerVertically(),
      hasBackdrop:
        config && typeof config.hasBackdrop !== 'undefined'
          ? config.hasBackdrop
          : true,
      panelClass: config && config.panelClass
    });
    const componentPortal = new ComponentPortal(GalleryDetailComponent);
    const componentRef = overlayRef.attach(componentPortal);
    const galleryDetailRef = new GalleryDetailRef(overlayRef);

    componentRef.instance.selectedItemIndex = selectedItemIndex;
    componentRef.instance.galleryDetailRef = galleryDetailRef;

    if (config) {
      if (config.thumbsOrientation) {
        componentRef.instance.thumbsOrientation = config.thumbsOrientation;
      }

      if (config.items) {
        galleryDetailRef.load(config.items);
      }
    }

    return galleryDetailRef;
  }
}
