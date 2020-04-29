import {
  Component,
  ChangeDetectionStrategy,
  Input,
  HostBinding
} from '@angular/core';

import { VerticalOrientation } from '../../core';

@Component({
  selector: 'doe-counter',
  template: `
    <span aria-hidden="true">
      {{ selectedIndex + 1 }}<span class="delimiter">/</span
      >{{ itemQuantity || 0 }}
    </span>
  `,
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {
  @Input()
  itemQuantity: number;

  @Input()
  selectedIndex: number;

  @HostBinding('class')
  @Input()
  orientation: VerticalOrientation;
}
