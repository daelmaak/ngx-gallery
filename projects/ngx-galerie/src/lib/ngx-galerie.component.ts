import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'ngx-galerie',
  templateUrl: './ngx-galerie.component.html',
  styleUrls: ['./ngx-galerie.component.scss']
})
export class NgxGalerieComponent implements OnChanges, OnInit, OnDestroy {
  @Input()
  items: string[];

  @Input()
  thumbsOrientation: 'top' | 'bottom' | 'left' | 'right' = 'left';

  @Input()
  thumbWidth = 120;

  @Input()
  thumbHeight = 80;

  @ViewChild('images', { static: true })
  images: ElementRef;

  @ViewChild('imageViewer', { static: true })
  imageViewer: ElementRef;

  @ViewChild('thumbnailList', { static: false })
  thumbnailList: ElementRef;

  @HostBinding('class.column')
  get galleryCollumn() {
    return (
      this.thumbsOrientation == 'top' || this.thumbsOrientation == 'bottom'
    );
  }

  // TODO rework selection mechanism
  selectedItemIndex: number;
  itemWidth: number;

  imagesHammer: HammerManager;
  imagesStyles: any = {};
  imagesTransition = true;

  private resizeSub: Subscription;

  constructor(private zone: NgZone) {}

  ngOnChanges({ items }: SimpleChanges) {
    if (items.previousValue !== items.currentValue) {
      this.selectedItemIndex = 0;
    }
  }

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.resizeSub = fromEvent(window, 'resize').subscribe(this.onResize);
    }
    setTimeout(this.onResize);

    // TODO make configurable?
    const direction = Hammer.DIRECTION_HORIZONTAL;

    if (typeof Hammer !== 'undefined') {
      this.imagesHammer = new Hammer(this.images.nativeElement);
      this.imagesHammer.get('pan').set({ direction });

      let i = 0;
      let vertical = false;

      this.zone.runOutsideAngular(() => {
        this.imagesHammer.on('pan', (e: HammerInput) => {
          if (i == 1 && !(e.direction & Hammer.DIRECTION_HORIZONTAL)) {
            vertical = true;
          }

          if (i && !vertical) {
            this.onPan(e);
          }

          if (e.isFinal) {
            i = 0;
            vertical = false;
            this.onPanEnd(e);
          } else {
            i++;
          }
        });
      });
    }
  }

  ngOnDestroy() {
    this.resizeSub && this.resizeSub.unsubscribe();
  }

  onPan = (e: HammerInput) => {
    if (e.eventType & Hammer.INPUT_CANCEL) {
      return;
    }

    this.imagesTransition = false;
    this.shiftImages(e.deltaX + -this.selectedItemIndex * this.itemWidth);
  };

  onPanEnd = (e: HammerInput) => {
    this.imagesTransition = true;

    if (e.eventType & Hammer.INPUT_CANCEL) {
      this.center();
    } else if (
      Math.abs(e.deltaX) > Math.abs(this.itemWidth / 3) ||
      Math.abs(e.velocityX) > 0.3
    ) {
      e.deltaX > 0 ? this.prev() : this.next();
    } else {
      // no item to be selected, center the current
      this.center();
    }
  };

  prev() {
    this.select(this.selectedItemIndex - 1);
  }

  next() {
    this.select(this.selectedItemIndex + 1);
  }
  private onResize = () => {
    this.itemWidth = this.imageViewer.nativeElement.offsetWidth;
    this.center();
  };

  private select(index: number) {
    this.selectedItemIndex = index;
    this.center();
  }

  private center() {
    this.shiftImages(-this.selectedItemIndex * this.itemWidth);
  }

  private shiftImages(x: number) {
    this.imagesStyles = {
      transform: `translate3D(${x}px, 0px, 0px)`
    };
  }
}
