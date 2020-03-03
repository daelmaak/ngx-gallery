# Project Gallery (Still in alpha!)

Gallery component for beautiful display of your media assets.

[**DEMO**](https://daelmaak.github.io/ngx-imagery/)

## Installation

`npm i -S @ngx-imagery/gallery@latest`

## Usage

In your ng module

```
import { GalleryModule } from '@ngx-imagery/gallery';

@NgModule({
  imports: [ GalleryModule ]
})
...
```

In your component class

```
import { GalleryItem } from '@ngx-imagery/gallery';

@Component({...})
export class AppComponent {
  images: GalleryItem[] = [
      {
        src: '/assets/kitten1.jpg'
      }
  ]
}
```

In your component template

```
<ngx-gallery [items]="images"></ngx-gallery>
```

## Docs

- [Gallery API](https://github.com/daelmaak/ngx-imagery/wiki/Gallery-API)
