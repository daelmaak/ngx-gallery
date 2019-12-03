import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  HostBinding
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

  // TODO rework selection mechanism
  selectedItem: string;

  constructor() {}

  ngOnChanges({ items }: SimpleChanges) {
    if (items.previousValue !== items.currentValue) {
      this.selectedItem = this.items[0];
    }
  }

  ngOnInit() {}
}
