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
  ViewChildren
} from '@angular/core';
import {
  OrientationFlag,
  Orientation,
  orientations
} from '../../core/orientation';

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

  @ViewChildren('li')
  itemEls: ElementRef[];

  private mainAxisLength: number;
  private orientationFlag: OrientationFlag;
  private showStartArrow = true;
  private showEndArrow = true;

  constructor(private elRef: ElementRef) {}

  ngOnChanges({ orientation, selectedItem }: SimpleChanges) {
    if (orientation && orientation.currentValue != null) {
      this.orientationFlag = orientations[orientation.currentValue];
    }
    if (selectedItem && selectedItem.currentValue != null) {
      const el = this.elRef.nativeElement as HTMLElement;
      const itemEl = el.querySelectorAll('li').item(selectedItem.currentValue);

      // TODO replace with custom smooth mechanism
      itemEl && itemEl.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }
  }

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      const el = this.elRef.nativeElement as HTMLElement;
      // TODO don't do both, also don't do at all if scrolling is turned off
      el.scrollTop = 0;
      el.scrollLeft = 0;

      this.setMainAxisLength();
      this.updateArrows();
    });
  }

  private updateArrows() {
    if (this.orientationFlag & OrientationFlag.VERTICAL) {
    }
  }

  private setMainAxisLength() {
    this.mainAxisLength =
      this.orientationFlag & OrientationFlag.VERTICAL
        ? this.elRef.nativeElement.offsetWidth
        : this.elRef.nativeElement.offsetHeight;
  }
}
