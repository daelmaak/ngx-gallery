# Ngx Gallery

Small, performant, responsive, dependency free, easy to use Angular **8+** gallery.

[![codecov](https://codecov.io/gh/daelmaak/ngx-gallery/branch/master/graph/badge.svg?token=eQhl2BmseY)](https://codecov.io/gh/daelmaak/ngx-gallery)
[![npm version](https://badge.fury.io/js/%40daelmaak%2Fngx-gallery.svg)](https://badge.fury.io/js/%40daelmaak%2Fngx-gallery)

[**Demos**](https://daelmaak.github.io/ngx-gallery/) |
[**Docs**](https://github.com/daelmaak/ngx-gallery/wiki) |
[**Changelog**](https://github.com/daelmaak/ngx-gallery/blob/master/CHANGELOG.md)

## Installation

```sh
yarn add @daelmaak/ngx-gallery
```

## Versioning

| Gallery   | Angular   | Readme                                                       |
| --------- | --------- | ------------------------------------------------------------ |
| `3.x.x`   | `>=16`    | here                                                         |
| `2.x.x`   | `>=13`    | [2.1.0](https://github.com/daelmaak/ngx-gallery/tree/v2.1.0) |
| `<=1.x.x` | `>=8 <13` | [1.3.0](https://github.com/daelmaak/ngx-gallery/tree/v1.3.0) |

## Usage

### 1. Import gallery into your component

```ts
import { GalleryComponent } from '@daelmaak/ngx-gallery';

@Component({
  standalone: true,
  imports: [GalleryComponent],
})
export class AppComponent {}
```

or into your module if you don't use standalone

```js
import { GalleryComponent } from '@daelmaak/ngx-gallery';

@NgModule({
  imports: [GalleryComponent],
})
export class AppModule {}
```

### 2. Create an image

```js
import { GalleryItem } from '@daelmaak/ngx-gallery';

@Component({...})
export class AppComponent {
  images: GalleryItem[] = [{ src: 'kitten1.jpg' }]
}
```

### 3. Render the gallery

```html
<gallery [items]="images"></gallery>
```

## Local development

```sh
yarn
yarn start # start demo app
yarn test
```
