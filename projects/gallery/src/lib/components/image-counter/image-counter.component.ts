import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

@Component({
  selector: 'ngx-image-counter',
  templateUrl: './image-counter.component.html',
  styleUrls: ['./image-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageCounterComponent implements OnInit {
  @Input()
  itemQuantity: number;

  @Input()
  selectedItem: number;

  constructor() {}

  ngOnInit() {}
}
