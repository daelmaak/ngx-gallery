import {
  afterNextRender,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { defer, Observable, of } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';
import {
  GalleryComponent,
  GalleryItem,
  Loading,
  ObjectFit,
  Orientation,
  VerticalOrientation,
} from '@daelmaak/ngx-gallery';

interface GalleryConfig {
  arrows: boolean;
  descriptions: boolean;
  mouseGestures: boolean;
  touchGestures: boolean;
  counter: boolean;
  counterOrientation: VerticalOrientation;
  visibleItems: number;
  objectFit: ObjectFit;
  loading: Loading;
  loop: boolean;
  rtl: boolean;
  selectedIndex: number | null;
  thumbs: boolean;
  thumbsAutoScroll: boolean;
  thumbsOrientation: Orientation;
  thumbsArrows: boolean;
  thumbsArrowSlideByLength: number;
  thumbsScrollBehavior: ScrollBehavior;
}

@Component({
  selector: 'app-demo-whole-config',
  templateUrl: './demo-whole-config.component.html',
  styleUrls: ['./demo-whole-config.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoWholeConfigComponent implements OnInit {
  @Input() images: GalleryItem[];
  items: Observable<GalleryItem[]>;

  displayGallery = true;
  imageLoadingLatency = 0;

  mobile?: boolean;

  galleryConfig: GalleryConfig = {
    arrows: !this.mobile,
    descriptions: false,
    mouseGestures: true,
    touchGestures: true,
    counter: true,
    counterOrientation: 'bottom',
    visibleItems: 1,
    objectFit: 'cover',
    loading: 'lazy',
    loop: false,
    rtl: false,
    selectedIndex: 0,
    thumbs: true,
    thumbsAutoScroll: true,
    thumbsOrientation: 'bottom',
    thumbsArrows: true,
    thumbsArrowSlideByLength: 0,
    thumbsScrollBehavior: 'smooth',
  };

  @ViewChild(GalleryComponent) gallery: GalleryComponent;

  constructor(private cd: ChangeDetectorRef) {
    afterNextRender({
      read: () => {
        this.galleryConfig = this.getGalleryConfig() || this.galleryConfig;
        this.mobile = matchMedia('(max-width: 767px)').matches;
        window.addEventListener('pagehide', this.storeGalleryConfig);
      },
    });
  }

  ngOnInit() {
    this.items = of(this.images).pipe(
      switchMap(items =>
        defer(() => of(items).pipe(delay(this.imageLoadingLatency)))
      )
    );
  }

  onConfigChange(prop: keyof GalleryConfig, value: unknown) {
    if (value === '') {
      return;
    }
    this.galleryConfig[prop as any] = +value ?? value;
    this.reloadGallery();
  }

  reloadGallery() {
    this.displayGallery = false;
    this.cd.detectChanges();
    this.displayGallery = true;
    this.cd.detectChanges();
  }

  protected getInputValue(event: Event): string | number | null {
    return (event.target as HTMLInputElement).value;
  }

  private getGalleryConfig() {
    return JSON.parse(sessionStorage.getItem('galleryConfig'));
  }

  private storeGalleryConfig = () => {
    sessionStorage.setItem('galleryConfig', JSON.stringify(this.galleryConfig));
  };
}
