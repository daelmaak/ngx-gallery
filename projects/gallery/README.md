# Doe Gallery (former Imagery)

Performant, responsive, easy to use Angular 8+ gallery

[![CircleCI](https://circleci.com/gh/daelmaak/ngx-doe-gallery.svg?style=shield)](https://circleci.com/gh/daelmaak/ngx-doe-gallery)

[**Demo**](https://daelmaak.github.io/ngx-doe-gallery/) |
[**Stackblitz**](https://stackblitz.com/edit/ngx-doe-gallery) |
[**Docs**](https://github.com/daelmaak/ngx-doe-gallery/wiki/Gallery-API)

## Why ngx-doe-gallery?

Because it gives you the doe eyes! Seriously though, use it if you need:

- Great performance and feel both on mobile and desktop
- Very small size - gallery itself has just 8kB gzipped!
- Easy usage and lot of customizations

## Installation

`npm i -S ngx-doe-gallery@latest`

## Usage

In your ng module

```
import { GalleryModule } from 'ngx-doe-gallery';

@NgModule({
  imports: [ GalleryModule ]
})
...
```

In your component class

```
import { GalleryItem } from 'ngx-doe-gallery';

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
<doe-gallery [items]="images"></doe-gallery>
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
