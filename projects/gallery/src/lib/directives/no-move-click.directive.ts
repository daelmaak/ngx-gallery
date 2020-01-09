import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import {
  switchMapTo,
  skip,
  take,
  repeat,
  tap,
  takeUntil
} from 'rxjs/operators';

@Directive({
  selector: '[ngxNoMoveClick]'
})
export class NoMoveClickDirective implements OnInit, OnDestroy {
  private clickSub: Subscription;

  constructor(private elRef: ElementRef<HTMLElement>) {}

  ngOnInit() {
    this.clickSub = fromEvent(this.elRef.nativeElement, 'mousedown')
      .pipe(
        tap(console.log),
        switchMapTo(fromEvent(this.elRef.nativeElement, 'mousemove')),
        tap(console.log),
        skip(3),
        switchMapTo(
          fromEvent<MouseEvent>(this.elRef.nativeElement, 'click', {
            capture: true
          })
        ),
        take(1),
        takeUntil(fromEvent(window, 'click').pipe(tap(console.log))),
        repeat()
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
