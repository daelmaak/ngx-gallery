import {
  Directive,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Directive({
  selector: '[media]',
  standalone: true,
})
export class MediaDirective implements OnInit, OnDestroy {
  @Output()
  mediaLoad = new EventEmitter();

  @Output()
  mediaLoadError = new EventEmitter();

  private nativeEl: HTMLElement;

  constructor(hostRef: ElementRef<HTMLElement>) {
    this.nativeEl = hostRef.nativeElement;
  }

  ngOnInit() {
    this.nativeEl.addEventListener('load', this.onLoad, true);
    this.nativeEl.addEventListener('loadedmetadata', this.onLoad, true);
    this.nativeEl.addEventListener('error', this.onLoad, true);
  }

  ngOnDestroy() {
    this.nativeEl.removeEventListener('load', this.onLoad, true);
    this.nativeEl.removeEventListener('loadedmetadata', this.onLoad, true);
    this.nativeEl.removeEventListener('error', this.onLoad, true);
  }

  onLoad = (ev: Event) => {
    const errored = ev.type === 'error';
    errored ? this.mediaLoadError.emit() : this.mediaLoad.emit();
  };
}
