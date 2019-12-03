import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // TODO more urls for different image viewer sizes
  images: string[];

  ngOnInit() {
    this.images = [
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjackhaig.files.wordpress.com%2F2012%2F09%2Fimag0408.jpg&f=1&nofb=1',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.fklm-tours.com%2Fwp-content%2Fuploads%2F2017%2F11%2FLandscapes-at-the-Semien-Mountains-1.jpg&f=1&nofb=1',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-uUwHOcti87o%2FUQfYd3nDGrI%2FAAAAAAAAhOo%2FGpWmN3lX8pM%2Fs1600%2F864271721_3b663f4dc7_b.jpg&f=1&nofb=1',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.werfenweng.eu%2F_thumbnail_%2F436_11_Hochgebirgsrunde.jpg&f=1&nofb=1'
    ];
  }
}
