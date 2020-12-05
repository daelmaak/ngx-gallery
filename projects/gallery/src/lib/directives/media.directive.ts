import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[doeMedia]',
})
export class MediaDirective {
  constructor(private hostRef: ElementRef<HTMLElement>) {}

  @HostListener('load', ['$event'])
  @HostListener('loadedmetadata', ['$event'])
  @HostListener('error', ['$event'])
  onLoad(ev: Event) {
    const evName = ev.type === 'error' ? 'doe-media-error' : 'doe-media-load';
    const dispatchEv = document.createEvent('CustomEvent');
    dispatchEv.initCustomEvent(evName, true, true, ev);

    this.hostRef.nativeElement.dispatchEvent(dispatchEv);
  }
}
