import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowcaseComponent {
  @Input() heading: string;
  @Input() subheading: string;
  @Input() stackblitz: string;
}
