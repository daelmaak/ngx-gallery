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
  thumbWidth = '120px';

  @Input()
  thumbHeight = '80px';

  @ViewChild('imageList', { static: false })
  imageList: ElementRef;

  // TODO rework selection mechanism
  selectedItem: string;

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
    this.renderer.setStyle(
      imageList,
      'transform',
      `translate3D(${e.deltaX}px, 0px, 0px)`
    );
  }

  onPanEnd() {
    const imageList = this.imageList.nativeElement as HTMLUListElement;

    this.renderer.setStyle(imageList, 'transition', `transform 0.3s`);
    this.renderer.setStyle(
      imageList,
      'transform',
      `translate3D(${this.currentImageListPosition}px, 0px, 0px)`
    );
  }
}
