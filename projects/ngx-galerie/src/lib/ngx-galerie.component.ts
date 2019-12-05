import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  HostBinding,
  ViewChild,
  ElementRef,
  Renderer2
} from '@angular/core';

@Component({
  selector: 'ngx-galerie',
  templateUrl: './ngx-galerie.component.html',
  styleUrls: ['./ngx-galerie.component.scss']
})
export class NgxGalerieComponent implements OnChanges, OnInit {
  @Input()
  items: string[];

  @Input()
  @HostBinding('style.width')
  width = '500px';

  @Input()
  @HostBinding('style.height')
  height = '500px';

  @Input()
  thumbsOrientation: 'top' | 'bottom' | 'left' | 'right' = 'left';

  @Input()
  thumbWidth = '120px';

  @Input()
  thumbHeight = '80px';

  @ViewChild('imageList', { static: false })
  imageList: ElementRef;

  @ViewChild('thumbnailList', { static: false })
  thumbnailList: ElementRef;

  @HostBinding('class.column')
  get galleryCollumn() {
    return (
      this.thumbsOrientation == 'top' || this.thumbsOrientation == 'bottom'
    );
  }

  // TODO rework selection mechanism
  selectedItem: string;
  itemWidth: number;

  private currentImageListPosition = 0;

  constructor(private renderer: Renderer2) {}

  ngOnChanges({ items }: SimpleChanges) {
    if (items.previousValue !== items.currentValue) {
      this.selectedItem = this.items[0];
    }
  }

  ngOnInit() {}

  onPanStart() {}

  onPan(e) {
    const imageList = this.imageList.nativeElement as HTMLUListElement;

    this.renderer.setStyle(imageList, 'transition', `transform 0s`);
    this.setTranslateX(e.deltaX);
  }

  onPanEnd() {
    const imageList = this.imageList.nativeElement as HTMLUListElement;

    this.renderer.setStyle(imageList, 'transition', `transform 0.3s`);
    this.setTranslateX(this.currentImageListPosition);
  }

  selectItem(item: string) {
    if (!this.itemWidth) {
      const imageList = this.imageList.nativeElement as HTMLUListElement;

      this.itemWidth = imageList
        .querySelector('li')
        .getBoundingClientRect().width;
    }

    const newItemIndex = this.items.indexOf(item);

    this.setTranslateX(this.itemWidth * newItemIndex * -1);
  }

  private getTranslateX() {
    const imageList = this.imageList.nativeElement as HTMLUListElement;

    const match = imageList.style.transform.match(/translate3D\((\d+)/);

    return match && match[0];
  }

  private setTranslateX(x: number) {
    const imageList = this.imageList.nativeElement as HTMLUListElement;

    this.renderer.setStyle(
      imageList,
      'transform',
      `translate3D(${x}px, 0px, 0px)`
    );
  }
}
