import {
  GlobalPositionStrategy,
  Overlay,
  OverlayConfig
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { GalleryDetailComponent } from './components/gallery-detail/gallery-detail.component';
import { GalleryDetailConfig } from './gallery-detail-config';
import { GalleryDetailRef } from './gallery-detail-ref';

@Injectable({
  providedIn: 'root'
})
export class GalleryDetailService {
  constructor(private overlay: Overlay) {}

  open(selectedIndex = 0, config?: GalleryDetailConfig): GalleryDetailRef {
    const overlayConfig: OverlayConfig = {
      positionStrategy: new GlobalPositionStrategy()
        .centerHorizontally()
        .centerVertically(),
      hasBackdrop:
        config && typeof config.hasBackdrop !== 'undefined'
          ? config.hasBackdrop
          : true,
      panelClass: config && config.panelClass
    };

    if (!config.documentScroll) {
      overlayConfig.scrollStrategy = this.overlay.scrollStrategies.block();
    }

    const overlayRef = this.overlay.create(overlayConfig);
    const componentPortal = new ComponentPortal(GalleryDetailComponent);
    const componentRef = overlayRef.attach(componentPortal);

    const galleryDetailRef = new GalleryDetailRef(overlayRef);

    componentRef.instance.selectedIndex = selectedIndex;
    componentRef.instance.galleryDetailRef = galleryDetailRef;
    componentRef.instance.config = config;

    return galleryDetailRef;
  }
}
