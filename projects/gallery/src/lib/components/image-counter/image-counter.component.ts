import {
  Component,
  ChangeDetectionStrategy,
  Input,
  HostBinding
} from '@angular/core';

import { VerticalOrientation } from '../../core';

@Component({
  selector: 'ngx-image-counter',
  template: `
    <span>{{ selectedItem + 1 }}/{{ itemQuantity || 0 }}</span>
  `,
  styleUrls: ['./image-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageCounterComponent {
  @Input()
  itemQuantity: number;

  @Input()
  selectedItem: number;

  @HostBinding('class')
  @Input()
  orientation: VerticalOrientation;
}
