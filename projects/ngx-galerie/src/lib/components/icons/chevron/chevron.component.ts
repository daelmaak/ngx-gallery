import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ngx-chevron',
  templateUrl: './chevron.component.html',
  styleUrls: ['./chevron.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChevronComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
