import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  HostBinding,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { Orientation } from '../../core/orientation';

@Component({
  selector: 'ngx-thumbnails',
  templateUrl: './thumbnails.component.html',
  styleUrls: ['./thumbnails.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThumbnailsComponent implements OnChanges, OnInit {
  @Input()
  items: string[];

  @Input()
  selectedItem: string;

  @Input()
  @HostBinding('class')
  orientation: Orientation;

  @Input()
  thumbHeight: number;

  @Input()
  thumbWidth: number;

  @Output()
  selection = new EventEmitter<string>();

  constructor() {}

  ngOnChanges({ selectedItem }: SimpleChanges) {}

  ngOnInit() {}
}
