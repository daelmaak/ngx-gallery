# Angular 8+ Image Gallery (Currently in beta)

Performant, responsive, easy to use gallery

[**Demo**](https://daelmaak.github.io/ngx-imagery/)

[**Stackblitz**](https://stackblitz.com/edit/ngx-imagery)

[**Docs**](https://github.com/daelmaak/ngx-imagery/wiki/Gallery-API)

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

## Development

### Install dependencies

In the root of the project, run

```
npm ci
```

### Serve

```
npm start
```

### Test

```
npm test
```
