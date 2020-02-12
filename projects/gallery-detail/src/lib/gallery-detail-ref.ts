import { OverlayRef } from '@angular/cdk/overlay';
import { BehaviorSubject, Observable } from 'rxjs';

import { GalleryItem } from '@ngx-imagery/gallery';

import { GalleryDetailState } from './gallery-detail-state';

export class GalleryDetailRef {
  private _state: BehaviorSubject<GalleryDetailState>;
  state: Observable<GalleryDetailState>;

  backdropClicks$: Observable<Event>;
  keydowns$: Observable<Event>;

  constructor(private overlayRef: OverlayRef) {
    this.backdropClicks$ = overlayRef.backdropClick();
    this.keydowns$ = this.overlayRef.keydownEvents();

    this._state = new BehaviorSubject<GalleryDetailState>({ items: [] });
    this.state = this._state.asObservable();
  }

  close() {
    this.overlayRef.dispose();
  }

  load(items: GalleryItem[]) {
    this._state.next({
      items
    });
  }
}
