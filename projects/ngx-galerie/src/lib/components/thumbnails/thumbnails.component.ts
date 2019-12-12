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
  items: string[];

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

  @ViewChild('thumbsContainer', { static: true })
  thumbsContainerRef: ElementRef<HTMLElement>;

  animationTime = 200;
  vertical: boolean;
  showStartArrow = false;
  showEndArrow = false;

  private mainAxisLength: number;
  private thumbsOverflow = 0;

  constructor(
    private cd: ChangeDetectorRef,
    private elRef: ElementRef<HTMLElement>
  ) {}

  ngOnChanges({ orientation, selectedItem }: SimpleChanges) {
    if (orientation && orientation.currentValue != null) {
      const newOrientation: Orientation = orientation.currentValue;
      this.vertical = newOrientation === 'left' || newOrientation == 'right';
    }
    if (selectedItem && selectedItem.currentValue != null) {
      const itemEl = this.thumbsContainerRef.nativeElement
        .querySelectorAll('li')
        .item(selectedItem.currentValue);

      // TODO replace with custom smooth mechanism
      itemEl && itemEl.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }
  }

  ngOnInit() {}

  ngAfterViewInit() {
    // TODO don't do both, also don't do at all if scrolling is turned off
    this.thumbsContainerRef.nativeElement.scrollTop = 0;
    this.thumbsContainerRef.nativeElement.scrollLeft = 0;

    setTimeout(() => {
      this.updateMainAxisLength();
      this.updateThumbsOverflow();
      this.updateArrows();
      this.cd.detectChanges();
    });
  }

  next() {
    this.move(200);
  }

  prev() {
    this.move(-200);
  }

  updateMainAxisLength() {
    const galleryEl = this.elRef.nativeElement;

    this.mainAxisLength = this.vertical
      ? galleryEl.offsetHeight
      : galleryEl.offsetWidth;
  }

  updateThumbsOverflow() {
    const thumbsEl = this.thumbsContainerRef.nativeElement.querySelector('ul');

    const thumbsAxis = this.vertical
      ? thumbsEl.offsetHeight
      : thumbsEl.offsetWidth;

    this.thumbsOverflow = thumbsAxis - this.mainAxisLength;
  }

  // TODO debounce
  updateArrows() {
    const scrollKey = this.vertical ? 'scrollTop' : 'scrollLeft';

    this.showStartArrow = this.thumbsContainerRef.nativeElement[scrollKey] > 0;
    this.showEndArrow =
      this.thumbsContainerRef.nativeElement[scrollKey] < this.thumbsOverflow;
  }

  private move(delta: number) {
    const scrollKey = this.vertical ? 'scrollTop' : 'scrollLeft';

    // this.thumbsContainerRef.nativeElement[scrollKey] += this.mainAxisLength / 3;

    const steps = 20;
    let accomplished = 0;
    const iterationTime = this.animationTime / steps;
    const iterationDelta = delta / steps;

    // TODO stream it maybe?
    const interval = setInterval(() => {
      accomplished++;
      this.thumbsContainerRef.nativeElement[scrollKey] += iterationDelta;
      if (accomplished >= steps) {
        clearInterval(interval);
      }
    }, iterationTime);
  }
}
