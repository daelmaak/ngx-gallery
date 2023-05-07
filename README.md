# Ngx Gallery

Performant, responsive, easy to use Angular **8+** gallery

[![codecov](https://codecov.io/gh/daelmaak/ngx-gallery/branch/master/graph/badge.svg?token=eQhl2BmseY)](https://codecov.io/gh/daelmaak/ngx-gallery)
[![npm version](https://badge.fury.io/js/%40daelmaak%2Fngx-gallery.svg)](https://badge.fury.io/js/%40daelmaak%2Fngx-gallery)

[**Demos**](https://daelmaak.github.io/ngx-gallery/) |
[**Docs**](https://github.com/daelmaak/ngx-gallery/wiki) |
[**Changelog**](https://github.com/daelmaak/ngx-gallery/blob/master/CHANGELOG.md)

## Why ngx-gallery?

Use it if you need:

- Great performance and feel both on mobile and desktop
- Very small size - gallery itself has just 9kB gzipped! It also packs no dependencies
- Easy usage and lots of customizations
- It just works!

## Installation

If you are using Ivy and Angular 13+, use

```sh
npm i -S @daelmaak/ngx-gallery
```

otherwise, please use [ngx-doe-gallery].

## Usage

### 1. Import gallery into your ng module

```js
import { GalleryModule } from '@daelmaak/ngx-gallery';

@NgModule({
  imports: [ GalleryModule ]
})
...
```

or into your component if you use standalone

```ts
import { GalleryModule } from '@daelmaak/ngx-gallery';

@Component({
  standalone: true,
  imports: [ GalleryModule ],
  ...
})
export class AppComponent {}
```

### 2. Create an image

```js
import { GalleryImage } from '@daelmaak/ngx-gallery';

@Component({...})
export class AppComponent {
  images = [ new GalleryImage('kitten1.jpg') ]
}
```

### 3. Render the gallery

```html
<gallery [items]="images"></gallery>
```

## Development

### Install dependencies

In the root of the project, run

```sh
npm ci
```

### Serve

```sh
npm start
```

### Test

```sh
npm test
```

[ngx-doe-gallery]: https://github.com/daelmaak/ngx-gallery/tree/v1-legacy-latest
