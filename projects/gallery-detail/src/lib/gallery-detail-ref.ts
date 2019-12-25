import { OverlayRef } from '@angular/cdk/overlay';
import { GalleryDetailState } from './gallery-detail-state';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

export class GalleryDetailRef {
  private _state: BehaviorSubject<GalleryDetailState>;
  state: Observable<GalleryDetailState>;

  // TODO probably move to gallery detail componetn
  backdropClicks$: Observable<Event>;
  escapes$: Observable<Event>;

  constructor(private overlayRef: OverlayRef) {
    this.backdropClicks$ = overlayRef.backdropClick();
    this.escapes$ = this.overlayRef
      .keydownEvents()
      .pipe(filter<KeyboardEvent>(e => e.key === 'Escape'));

    this._state = new BehaviorSubject<GalleryDetailState>({ items: [] });
    this.state = this._state.asObservable();
  }

  close() {
    this.overlayRef.dispose();
  }

  load(items: string[]) {
    this._state.next({
      items
    });
  }
}
