import { Injectable } from '@angular/core';
import { Overlay, GlobalPositionStrategy } from '@angular/cdk/overlay';
import { ComponentPortal, ComponentType } from '@angular/cdk/portal';
import { DetailViewComponent } from './detail-view.component';

@Injectable({
  providedIn: 'root'
})
export class DetailViewService {
  constructor(private overlay: Overlay) {}

  open(component?: ComponentType<any>) {
    const overlayRef = this.overlay.create({
      positionStrategy: new GlobalPositionStrategy()
        .centerHorizontally()
        .centerVertically(),
      hasBackdrop: true
    });
    const componentPortal = new ComponentPortal(DetailViewComponent);
    const componentRef = overlayRef.attach(componentPortal);

    componentRef.instance.overlayRef = overlayRef;
  }
}
