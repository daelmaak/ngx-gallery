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

    this.hostRef.nativeElement.dispatchEvent(new CustomEvent(evName, {
      bubbles: true,
      cancelable: true,
      detail: ev
    }));
  }
}
