import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ChangeDetectorRef
} from '@angular/core';
import { Orientation } from '../../core/orientation';

@Component({
  selector: 'ngx-thumbnails',
  templateUrl: './thumbnails.component.html',
  styleUrls: ['./thumbnails.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThumbnailsComponent implements OnChanges, OnInit, AfterViewInit {
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
  @HostBinding('class.scroll')
  scroll: boolean;

  @Output()
  selection = new EventEmitter<string>();

  @ViewChild('thumbs', { static: true })
  thumbsRef: ElementRef<HTMLElement>;

  animationTime = 200;
  vertical: boolean;
  showStartArrow = false;
  showEndArrow = false;

  private thumbMainAxis: number;
  private thumbsOverflow = 0;

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

  ngOnInit() {}

  ngAfterViewInit() {
    // TODO don't do both, also don't do at all if scrolling is turned off
    this.thumbsRef.nativeElement.scrollTop = 0;
    this.thumbsRef.nativeElement.scrollLeft = 0;

    setTimeout(() => {
      this.updateThumbMainAxis();
      this.updateThumbsOverflow();
      this.updateArrows();
      this.cd.detectChanges();
    });
  }

  next() {
    this.move(this.thumbMainAxis * 2);
  }

  prev() {
    this.move(-this.thumbMainAxis * 2);
  }

  updateThumbMainAxis() {
    if (this.items.length <= 1) {
      return;
    }

    const thumbsEl = this.thumbsRef.nativeElement.querySelectorAll(
      'li'
    );
    const key = this.vertical ? 'y' : 'x';

    this.thumbMainAxis =
      thumbsEl[1].getBoundingClientRect()[key] -
      thumbsEl[0].getBoundingClientRect()[key];
  }

  updateThumbsOverflow() {
    const galleryAxis = this.vertical
      ? this.elRef.nativeElement.offsetHeight
      : this.elRef.nativeElement.offsetWidth;

    this.thumbsOverflow = this.thumbMainAxis * this.items.length - galleryAxis;
  }

  // TODO debounce
  updateArrows() {
    const scrollKey = this.vertical ? 'scrollTop' : 'scrollLeft';

    this.showStartArrow = this.thumbsRef.nativeElement[scrollKey] > 0;
    this.showEndArrow =
      this.thumbsRef.nativeElement[scrollKey] < this.thumbsOverflow;
  }

  private move(delta: number) {
    const scrollKey = this.vertical ? 'scrollTop' : 'scrollLeft';
    const steps = 20;
    const iterationTime = this.animationTime / steps;
    const iterationDelta = delta / steps;
    let accomplished = 0;

    // TODO stream it maybe?
    const interval = setInterval(() => {
      accomplished++;
      this.thumbsRef.nativeElement[scrollKey] += iterationDelta;
      if (accomplished >= steps) {
        clearInterval(interval);
      }
    }, iterationTime);
  }
}
