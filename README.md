# Ngx Gallery

Performant, responsive, easy to use Angular **8+** gallery

[![codecov](https://codecov.io/gh/daelmaak/ngx-gallery/branch/master/graph/badge.svg?token=eQhl2BmseY)](https://codecov.io/gh/daelmaak/ngx-gallery)
[![npm](https://img.shields.io/npm/v/ngx-gallery.svg)](https://www.npmjs.com/package/ngx-gallery)

[**Demos**](https://daelmaak.github.io/ngx-gallery/) |
[**Docs**](https://github.com/daelmaak/ngx-gallery/wiki/Gallery-API/cc4f9ed153dd3362aef704cea5bc3eb4c3f34397) |
[**Changelog**](https://github.com/daelmaak/ngx-gallery/blob/master/CHANGELOG.md)


## Why ngx-gallery?

Use it if you need:

- Great performance and feel both on mobile and desktop
- Very small size - gallery itself has just 9kB gzipped! It also packs no dependencies
- Easy usage and lots of customizations
- It just works!

## Installation

If you are using Ivy and Angular 13+, use

```
npm i -S @daelmaak/ngx-gallery
```

otherwise, please use [ngx-doe-gallery].

### Migration from [ngx-doe-gallery]

The project was renamed from ngx-doe-gallery to just **ngx-gallery** to improve 
searchability. Together with the new name comes upgrade to state-of-the-art technologies, 
like the newest version of Angular among others.

If you wish to upgrade to the hottest stuff, just remove the old gallery
```
npm remove ngx-doe-gallery
```
and install the new one
```
npm i -S @daelmaak/ngx-gallery
```

and change the used occurrences of 

```
<doe-gallery [items]="items"></doe-gallery>
```

to 

```
<gallery [items]="items"></gallery>
```

that's it!


## Usage

In your ng module

```
import { GalleryModule } from '@daelmaak/ngx-gallery';

@NgModule({
  imports: [ GalleryModule ]
})
...
```

In your component

```
import { GalleryImage } from '@daelmaak/ngx-gallery';

@Component({...})
export class AppComponent {
  images = [ new GalleryImage('kitten1.jpg') ]
}
```

In your component template

```
<gallery [items]="images"></gallery>
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

[ngx-doe-gallery]: (https://github.com/daelmaak/ngx-gallery/tree/v1-legacy-latest)
