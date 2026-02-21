import type { OnDestroy, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Directive, EventEmitter, Output, inject } from '@angular/core';

@Directive({
  selector: '[media]',
})
export class MediaDirective implements OnInit, OnDestroy {
  @Output()
  mediaLoadError = new EventEmitter();

  private nativeEl: HTMLElement;

  constructor() {
    const hostRef = inject<ElementRef<HTMLElement>>(ElementRef);

    this.nativeEl = hostRef.nativeElement;
  }

  ngOnInit() {
    this.nativeEl.addEventListener('error', this.onLoad, true);
  }

  ngOnDestroy() {
    this.nativeEl.removeEventListener('error', this.onLoad, true);
  }

  onLoad = (ev: Event) => {
    if (ev.type === 'error') {
      this.mediaLoadError.emit();
    }
  };
}
