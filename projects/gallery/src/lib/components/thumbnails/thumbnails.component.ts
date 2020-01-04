import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { fromEvent, interval, Subject } from 'rxjs';
import { debounceTime, map, switchMap, take, takeUntil } from 'rxjs/operators';
import { Orientation } from '../../core/orientation';

@Component({
  selector: 'ngx-thumbnails',
  templateUrl: './thumbnails.component.html',
  styleUrls: ['./thumbnails.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThumbnailsComponent
  implements OnChanges, OnInit, AfterViewInit, OnDestroy {
  @Input()
  items: string[] = [];

  @Input()
  selectedItem: number;

  @Input()
  @HostBinding('class')
  orientation: Orientation;

  @Input()
  arrows: boolean;

  @Input()
  arrowSlideTime: number;

  @Input()
  arrowSlideByLength: number;

  @Input()
  arrowSlideByQuantity: number;

  @Input()
  @HostBinding('class.scrollable')
  scroll: boolean;

  @Output()
  thumbClick = new EventEmitter<Event>();

  @Output()
  selection = new EventEmitter<string>();

  @ViewChild('thumbs', { static: true })
  thumbsRef: ElementRef<HTMLElement>;

  vertical: boolean;
  showStartArrow = false;
  showEndArrow = false;

  private thumbMainAxis: number;
  private thumbsOverflow = 0;

  private destroy$ = new Subject();
  private sliding$ = new Subject<number>();

  constructor(
    private cd: ChangeDetectorRef,
    private elRef: ElementRef<HTMLElement>
  ) {}

  ngOnChanges({ orientation, selectedItem }: SimpleChanges) {
    if (orientation && orientation.currentValue != null) {
      const newOrientation: Orientation = orientation.currentValue;
      this.vertical = newOrientation === 'left' || newOrientation === 'right';
    }
    if (selectedItem && selectedItem.currentValue != null) {
      const itemEl = this.thumbsRef.nativeElement
        .querySelectorAll('li')
        .item(selectedItem.currentValue);

      // TODO replace with custom smooth mechanism
      itemEl && itemEl.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }
  }

  ngOnInit() {
    this.arrowSlideTime === undefined && (this.arrowSlideTime = 200);

    const fps = 60;

    // TODO use requestAnimationFrame without the interval
    this.sliding$
      .pipe(
        switchMap(delta =>
          interval(this.arrowSlideTime / fps).pipe(
            take(fps),
            map(_ => delta / fps)
          )
        ),
        takeUntil(this.destroy$)
      )
      .subscribe(stepDelta => {
        const scrollKey = this.vertical ? 'scrollTop' : 'scrollLeft';
        requestAnimationFrame(() => {
          this.thumbsRef.nativeElement[scrollKey] += stepDelta;
        });
      });

    // TODO unsubscribe
    fromEvent(this.thumbsRef.nativeElement, 'scroll')
      .pipe(debounceTime(20), takeUntil(this.destroy$))
      .subscribe(() => {
        if (this.arrows) {
          this.updateArrows();
          this.cd.detectChanges();
        }
      });

    if (typeof window !== undefined) {
      fromEvent(window, 'resize')
        .pipe(debounceTime(100), takeUntil(this.destroy$))
        .subscribe(this.update);
    }
  }

  ngAfterViewInit() {
    // TODO don't do both, also don't do at all if scrolling is turned off
    this.thumbsRef.nativeElement.scrollTop = 0;
    this.thumbsRef.nativeElement.scrollLeft = 0;

    setTimeout(this.update);
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  arrowSlide(direction: number) {
    let delta: number;

    if (this.arrowSlideByLength) {
      delta = this.arrowSlideByLength;
    } else if (this.arrowSlideByQuantity) {
      delta = this.arrowSlideByQuantity * this.thumbMainAxis;
    } else {
      // slide by the full height/width of the gallery
      delta = this.vertical
        ? this.elRef.nativeElement.offsetHeight
        : this.elRef.nativeElement.offsetWidth;
    }
    this.sliding$.next(delta * direction);
  }

  private update = () => {
    this.updateThumbMainAxis();

    if (this.arrows) {
      this.updateThumbsOverflow();
      this.updateArrows();
      this.cd.detectChanges();
    }
  };

  private updateThumbMainAxis() {
    if (this.items.length <= 1) {
      return;
    }

    const thumbsEl = this.thumbsRef.nativeElement.querySelectorAll('li');
    const key = this.vertical ? 'y' : 'x';

    this.thumbMainAxis =
      thumbsEl[1].getBoundingClientRect()[key] -
      thumbsEl[0].getBoundingClientRect()[key];
  }

  private updateThumbsOverflow() {
    const galleryAxis = this.vertical
      ? this.elRef.nativeElement.offsetHeight
      : this.elRef.nativeElement.offsetWidth;

    this.thumbsOverflow = this.thumbMainAxis * this.items.length - galleryAxis;
  }

  private updateArrows() {
    const scrollKey = this.vertical ? 'scrollTop' : 'scrollLeft';

    this.showStartArrow = this.thumbsRef.nativeElement[scrollKey] > 0;
    this.showEndArrow =
      this.thumbsRef.nativeElement[scrollKey] < this.thumbsOverflow;
  }
}
