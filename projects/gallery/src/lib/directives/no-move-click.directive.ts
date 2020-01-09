import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, merge, Subscription } from 'rxjs';
import { filter, last, switchMap, takeWhile, tap } from 'rxjs/operators';

@Directive({
  selector: '[ngxNoMoveClick]'
})
export class NoMoveClickDirective implements OnInit, OnDestroy {
  /**
   * Threshold for mouse movement extremes after which clicks are blocked
   */
  @Input()
  set ngxNoMoveClick(threshold: number) {
    if (Number.isInteger(threshold)) {
      this.threshold = threshold;
    }
  }

  private threshold = 10;
  private clickSub: Subscription;

  constructor(private elRef: ElementRef<HTMLElement>) {}

  ngOnInit() {
    const el = this.elRef.nativeElement;

    // This stream waits for mousedown, then switches to mousemoves while the mouse is still down.
    // It then looks what was the maximum delta distance from the mousedown event.
    // If this delta exceeds configured threshold, the click that follows is cancelled.
    this.clickSub = fromEvent<MouseEvent>(el, 'mousedown')
      .pipe(
        switchMap(e => {
          const startX = e.clientX;
          const startY = e.clientY;
          let maxDeltaX = 0;
          let maxDeltaY = 0;

          return merge(
            fromEvent<MouseEvent>(el, 'mousemove'),
            fromEvent<MouseEvent>(el, 'click', { capture: true })
          ).pipe(
            tap(ev => {
              maxDeltaX = Math.max(maxDeltaX, Math.abs(startX - ev.clientX));
              maxDeltaY = Math.max(maxDeltaY, Math.abs(startY - ev.clientY));
            }),
            takeWhile(ev => ev.type !== 'click', true),
            last(),
            filter(
              _ => maxDeltaX > this.threshold || maxDeltaY > this.threshold
            )
          );
        })
      )
      .subscribe(e => {
        e.preventDefault();
        e.stopPropagation();
      });
  }

  ngOnDestroy() {
    this.clickSub.unsubscribe();
  }
}
