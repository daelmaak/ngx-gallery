# Imagery

Performant, responsive, easy to use Angular 8+ gallery

[![CircleCI](https://circleci.com/gh/daelmaak/ngx-imagery.svg?style=shield)](https://circleci.com/gh/daelmaak/ngx-imagery)

[**Demo**](https://daelmaak.github.io/ngx-imagery/) |
[**Stackblitz**](https://stackblitz.com/edit/ngx-imagery) |
[**Docs**](https://github.com/daelmaak/ngx-imagery/wiki/Gallery-API)

## Why ngx-imagery

- Great performance and feel both on mobile and desktop
- Very small - gallery itself has just 8kB gzipped!
- Easy to use and customize

## Installation

`npm i -S ngx-imagery@latest`

## Usage

In your ng module

```
import { GalleryModule } from 'ngx-imagery';

@NgModule({
  imports: [ GalleryModule ]
})
...
```

In your component class

```
import { GalleryItem } from 'ngx-imagery';

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
