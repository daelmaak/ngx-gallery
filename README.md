# Angular 8+ Image Gallery (Still in alpha!)

Performant and easy to use, responsive image galllery

## Why another gallery?

- High performance due to leverage of native scroll
- Built with mobile first philosophy in mind
- Very small - gallery itself has just 5kB gzipped!
- Easy to use

## Installation

`npm i -S @ngx-imagery/gallery`

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
