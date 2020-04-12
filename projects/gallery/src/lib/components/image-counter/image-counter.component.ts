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
    <span aria-hidden="true">
      {{ selectedIndex + 1 }}<span class="delimiter">/</span
      >{{ itemQuantity || 0 }}
    </span>
  `,
  styleUrls: ['./image-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageCounterComponent {
  @Input()
  itemQuantity: number;

  @Input()
  selectedIndex: number;

  @HostBinding('class')
  @Input()
  orientation: VerticalOrientation;
}
