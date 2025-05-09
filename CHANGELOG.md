# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [3.1.0](https://github.com/daelmaak/ngx-gallery/compare/v3.0.4...v3.1.0) (2024-11-11)


### Features

* **demo:** add SSR ([47e3e19](https://github.com/daelmaak/ngx-gallery/commit/47e3e191b3d66953e771cbdd1462ea03b217e491))


### Bug Fixes

* **gallery:** exclude browser APIs from SSR in thumbs ([e69eb50](https://github.com/daelmaak/ngx-gallery/commit/e69eb50bb2887de6e40befd12231ebdd3c25babc))

### [3.0.4](https://github.com/daelmaak/ngx-gallery/compare/v3.0.3...v3.0.4) (2024-02-21)


### Bug Fixes

* **gallery:** re-center when items change in loop mode ([548ed56](https://github.com/daelmaak/ngx-gallery/commit/548ed562b1e677e2edcd31170699604b33311d49))

### [3.0.3](https://github.com/daelmaak/ngx-gallery/compare/v3.0.2...v3.0.3) (2024-02-07)


### Bug Fixes

* do not reset items when different input is changed ([834a23e](https://github.com/daelmaak/ngx-gallery/commit/834a23ec717a9ebd55050d202c62ddd6b76a42b6))

### [3.0.2](https://github.com/daelmaak/ngx-gallery/compare/v3.0.1...v3.0.2) (2023-12-17)


### Bug Fixes

* check that changes are defined ([ebdc346](https://github.com/daelmaak/ngx-gallery/commit/ebdc34669928ab0b50d2972471d43315a4f67ce3))

### [3.0.1](https://github.com/daelmaak/ngx-gallery/compare/v3.0.0...v3.0.1) (2023-12-02)


### Bug Fixes

* **demo:** fix inflexible form field labels ([0698ed2](https://github.com/daelmaak/ngx-gallery/commit/0698ed2d6dd2fb5a512fce55eb52882d6456e7ba))
* **demo:** fix links to documentation ([ff7c86b](https://github.com/daelmaak/ngx-gallery/commit/ff7c86bbcda163987747d502efbd78320ad3fd9f))
* **demo:** use showErrors where needed ([7d989cf](https://github.com/daelmaak/ngx-gallery/commit/7d989cf606248ff11a42919a9382691a74543916))
* make `items` always defined ([319ad43](https://github.com/daelmaak/ngx-gallery/commit/319ad43b5fc2f357293eb9f0b53fdb56403cd950))
* prevent looping being stuck in disabled state ([df4b06c](https://github.com/daelmaak/ngx-gallery/commit/df4b06cab690fb39f92f6285e82a3910e992fa14))


### Documentation

* remove wiki from readme, rename demos to showcase ([9dd9366](https://github.com/daelmaak/ngx-gallery/commit/9dd93665218093de6adcc7e7a773567aab3cb609))

## [3.0.0](https://github.com/daelmaak/ngx-gallery/compare/v3.0.0-RC.11...v3.0.0) (2023-10-02)


### Features

* add option not to display media error ([4182376](https://github.com/daelmaak/ngx-gallery/commit/4182376debac954ee3356a9b879375842ac509ac))


### Bug Fixes

* **demo:** fix compilation issue ([d0385a2](https://github.com/daelmaak/ngx-gallery/commit/d0385a29072e58729bb6d7469197514f2e802ae0))


### Documentation

* add JS docs to the inputs/outputs ([ec5018b](https://github.com/daelmaak/ngx-gallery/commit/ec5018b4d9ffd873563a7f07952af820de0783d9))

## [3.0.0-RC.11](https://github.com/daelmaak/ngx-gallery/compare/v3.0.0-RC.10...v3.0.0-RC.11) (2023-09-28)


### ⚠ BREAKING CHANGES

* remove media loading indicator

### change

* remove media loading indicator ([e43ff13](https://github.com/daelmaak/ngx-gallery/commit/e43ff13d32090881eb7e3827cf056d98366dc3a8))

## [3.0.0-RC.10](https://github.com/daelmaak/ngx-gallery/compare/v3.0.0-RC.9...v3.0.0-RC.10) (2023-09-15)


### Features

* add smoother multi-item navigation WIP ([f748f1e](https://github.com/daelmaak/ngx-gallery/commit/f748f1efa16262831d3d3d8075cabf452d1b0b34))


### Bug Fixes

* **demo:** display just 1 item on mobile ([ed793f9](https://github.com/daelmaak/ngx-gallery/commit/ed793f957eca472759e97fabbbfefa8ab8b6389b))
* prevent type error when video doesn't exist ([1c12e47](https://github.com/daelmaak/ngx-gallery/commit/1c12e479d9f09c081fd49033f6defc9ff4a97d33))
* update fringe count and respective items on change ([3d9791e](https://github.com/daelmaak/ngx-gallery/commit/3d9791e31a075b8ec5350077943234daef867fbc))

## [3.0.0-RC.9](https://github.com/daelmaak/ngx-gallery/compare/v3.0.0-RC.8...v3.0.0-RC.9) (2023-09-04)


### ⚠ BREAKING CHANGES

* rename imageClick to itemClick

### Features

* add clip option ([5ff8a5e](https://github.com/daelmaak/ngx-gallery/commit/5ff8a5eb6448d3393995f6326b342d3d53010afd))
* **demo:** create a carousel example ([1433d0f](https://github.com/daelmaak/ngx-gallery/commit/1433d0f76cf12544aa309bac49fb27bb1b5a7ff0))
* support navigation by multiple items WIP ([9ff0fae](https://github.com/daelmaak/ngx-gallery/commit/9ff0faefdf23a6d09bdaade5a0643545fdac497e))


### change

* rename imageClick to itemClick ([8aa1545](https://github.com/daelmaak/ngx-gallery/commit/8aa154506c2be8075670570c83fa889ca32d1144))

## [3.0.0-RC.8](https://github.com/daelmaak/ngx-gallery/compare/v3.0.0-RC.7...v3.0.0-RC.8) (2023-08-27)


### Features

* improve infinte loop ([0bd6c4c](https://github.com/daelmaak/ngx-gallery/commit/0bd6c4ca0096841fba55637950ff1c7c0a77dd42))

## [3.0.0-RC.7](https://github.com/daelmaak/ngx-gallery/compare/v3.0.0-RC.6...v3.0.0-RC.7) (2023-08-13)


### Bug Fixes

* prevent loop from animated scrolling ([97a8f68](https://github.com/daelmaak/ngx-gallery/commit/97a8f68bde8feb07e14c3e105d9ef2bc52b765b0))
* prevent on init centering animation ([4d65e22](https://github.com/daelmaak/ngx-gallery/commit/4d65e226c1cc7ef290489d5b653e3250bb2aa91d))
* swipe by pixels only on loop ([1015d84](https://github.com/daelmaak/ngx-gallery/commit/1015d845638e20c06247c960d6b35af00b6971d1))

## [3.0.0-RC.6](https://github.com/daelmaak/ngx-gallery/compare/v3.0.0-RC.5...v3.0.0-RC.6) (2023-08-11)


### ⚠ BREAKING CHANGES

* turn item width into visible item count

### change

* turn item width into visible item count ([80cce04](https://github.com/daelmaak/ngx-gallery/commit/80cce049ff9dd330d8741cecb20baf18fff2ac4f))

## [3.0.0-RC.5](https://github.com/daelmaak/ngx-gallery/compare/v3.0.0-RC.4...v3.0.0-RC.5) (2023-08-06)


### ⚠ BREAKING CHANGES

* make lazy loading default

### Features

* make lazy loading default ([c01fdc1](https://github.com/daelmaak/ngx-gallery/commit/c01fdc187d148b620d6c664843bb8604fc9c4d2b))
* use native lazy loading instead of custom one ([c26e75a](https://github.com/daelmaak/ngx-gallery/commit/c26e75a3b9821a805f6f3fdce1f8fa41b72d52b0))

## [3.0.0-RC.4](https://github.com/daelmaak/ngx-gallery/compare/v3.0.0-RC.3...v3.0.0-RC.4) (2023-08-05)


### Features

* get rid of direct rxjs dependency ([8f50899](https://github.com/daelmaak/ngx-gallery/commit/8f50899b8ec6794deb1ac7046640d62e31ec49a3))


## [3.0.0-RC.3](https://github.com/daelmaak/ngx-gallery/compare/v3.0.0-RC.2...v3.0.0-RC.3) (2023-08-05)


### ⚠ BREAKING CHANGES

* use standalone components everywhere
* reshape gallery items

### Features

* unify counter and description ([a240ccc](https://github.com/daelmaak/ngx-gallery/commit/a240ccc2c5e106d9822a02f91ce789239b8145e8))


### change

* reshape gallery items ([e14ed88](https://github.com/daelmaak/ngx-gallery/commit/e14ed88d1fc41aca9ce60ac0f30a89ed43a9121a))
* use standalone components everywhere ([392ed51](https://github.com/daelmaak/ngx-gallery/commit/392ed5184ee3b5114eb05b5300b273bc618c0c33))


### Documentation

* add versioning to readme ([d0a98a8](https://github.com/daelmaak/ngx-gallery/commit/d0a98a8875753b9dee494515511ebf7b897b384c))
* simplify USP in readme ([0579dd1](https://github.com/daelmaak/ngx-gallery/commit/0579dd1a646f3411104de4488ed314d7d198daac))

## [3.0.0-RC.2](https://github.com/daelmaak/ngx-gallery/compare/v3.0.0-RC.1...v3.0.0-RC.2) (2023-07-30)


### ⚠ BREAKING CHANGES

* upgrade to ng16

### Features

* add aria labels and make arrows into buttons ([397ad99](https://github.com/daelmaak/ngx-gallery/commit/397ad99195ee2fe3f8725fe6db3338002729bd36))
* do not require media directive for custom views ([c0015aa](https://github.com/daelmaak/ngx-gallery/commit/c0015aa44df5698eeb04e38004ba2b75a430a7fa))
* upgrade to ng16 ([1850435](https://github.com/daelmaak/ngx-gallery/commit/18504353d6d928595cb4db1ef1e7ef9c962fb5e1))

## [3.0.0-RC.1](https://github.com/daelmaak/ngx-gallery/compare/v3.0.0-RC.0...v3.0.0-RC.1) (2023-07-30)


### ⚠ BREAKING CHANGES

* upgrade ng to v15

### Features

* upgrade ng to v15 ([28a1b69](https://github.com/daelmaak/ngx-gallery/commit/28a1b69ed4878a50e7360590796d04f057553758))


### Documentation

* update browserslist ([37f46d3](https://github.com/daelmaak/ngx-gallery/commit/37f46d3ba796ea2336a3a792297ed1877a7084c6))

## [3.0.0-RC.0](https://github.com/daelmaak/ngx-gallery/compare/v2.0.0...v3.0.0-RC.0) (2023-07-24)


### ⚠ BREAKING CHANGES

* remove tslib
* upgrade angular to v14

### Documentation

* update readme ([9018a81](https://github.com/daelmaak/ngx-gallery/commit/9018a81192014b882da39266491e099c5082998f))


* remove tslib ([493ab8e](https://github.com/daelmaak/ngx-gallery/commit/493ab8e06b0110a9b51667cd06dfa6b12d2ef2b7))
* upgrade angular to v14 ([c6d0f3d](https://github.com/daelmaak/ngx-gallery/commit/c6d0f3dc3788af4000d15bb7ccdaaced37223b67))

## [2.0.0](https://github.com/daelmaak/ngx-gallery/compare/v2.0.0-RC.0...v2.0.0) (2022-01-03)

## [2.0.0-RC.0](https://github.com/daelmaak/ngx-gallery/compare/v1.1.3...v2.0.0-RC.0) (2021-12-23)

### ⚠ BREAKING CHANGES

* Upgrades angular from 8 to 13
* Drops support for IE
* Drops support for ViewEngine. Only projects using Ivy are supported. This shouldn't be a problem going forward, since Ivy is opt-in since ng9, and default since ng12 with ViewEngine support completely removed in ng13.

## [1.1.3] - 2021-12-12

### Changed

- Upgraded to ng-packagr@10, which removes esm5 and fesm5 package formats. This leads to smaller package size.

## [1.1.2] - 2021-07-22

### Fixed

- Added missing is-browser check to support file, to prevent issues in non-browser envs

## [1.1.1] - 2020-12-5

### Fixed

- Fixed IE11 and older Safari freezes caused by polyfill for IntersectionObserver
- Fixed gallery's appearance on IE11 (except for multiple items in scrollport are not currently working, only 1 item at a time is being displayed in the viewer)
- Using scale(-1) instead of rotate(180deg) to mirror navigation arrow buttons, which fixes issues with eg. material ripple effect

## [1.1.0] - 2020-11-21

## [1.1.0-RC1] - 2020-11-15

### Added

- Support for right-to-left UI composition and swiping, thanks to [@chemiu-mipo](https://github.com/chemiu-mipo)

### Changed

- During initialization of thumbs, if selected thumb needs to be scrolled to, it happens smoothly. Previously, there was no animation.
- During initialization of thumbs, if the selected thumb is not visible in scroll port, it gets scrolled to regardless of autoScroll setting.

### Fixed

- Fixed video pausing when navigating away from it and video is still playing
- Not attempting re-centering of selected image when thumbnails orientation didn't change its axis (either stayed horizontal or stayed vertical)

## [1.0.0] - 2020-08-22

### Fixed

- Added missing es6 export of MediaDirective.

## [1.0.0-beta.3] - 2020-08-15

### Added

- Added `[contentTemplate]` @Input with which an arbitrary content can be injected directly into the gallery viewer.

### Changed

- Reinstated angular/animations for adding/removing media elements (img, video, iframe) to/from the DOM
- Refined navigation through gallery via tools like NVDA or JAWS

### Removed

- Removed unused peer dependency on @angular/animations
- Removed img/video opacity while it is loading due to problems with occasional flashes during gallery's init phase. The class `doe-viewer-media-loading` on the img/video elements can still be used for style assignments though.
- Fixed tabbing through gallery with infinite looping. The tabbing is finite now.

## [1.0.0-beta.2] - 2020-07-06

### Fixed

- BrowserAnimationsModule removed as it was causing issues where BrowserModule was already imported.

### Removed

- Removed :leave animation from gallery item elements

## [1.0.0-beta.0] - 2020-07-01

### Added

- Added `[media]` directive, which is to be used in custom item templates (`[itemTemplate]` @Input). It is not mandatory, but if used it makes the gallery aware of the custom provided media (`<img>` or `<video>`), them failing or successfully loading in particular. Without it, the user is responsible for providing some kind of a loading animation and, if needed, reflect on failure to load media, himself.
- Gallery now loads only those media, that are displayed in the scrollport of the gallery. Once there is an interaction though of any kind with the gallery, it starts preloading also item which are in immediate proximity of the scrollport, but not visible yet. This is done to improve first load performance.
- Item enter animation in form of a fade-in.

### Changed

- Custom item template uses now default or provided templates for error and loading states - when main image is being loaded or failed to load, the viewer shows loading animation or error message + icon respectively. Previously, using custom item template meant taking care of displaying loading or error states on user's own.
- If thumbnail can't be loaded or is simply not provided, a placeholder icon is shown instead, hinting on the type of asset (image/video)
- If no thumbnail provided, the main image is not used instead anymore, as this was defeating purpose of lazy loading. There is a room for improvement in future releases by eg. displaying placeholder until the main image is loaded, and then using the main image.
- Selected thumbnail gets a semi-transparent white frame instead of previous thich dash-like rectangle.
- Gallery background made lighter

### Fixed

- Looping only when there are more than 1 items in the gallery.
- Request for video poster is not made if poster not specified. This was failing before with 404.
- Fixed broken custom viewer item template, which wasn't really working at all due to template variable name conflict.
- When selecting outside of indexes known to gallery (0...items.length - 1), either the first or the last item is selected in the end.

## [1.0.0-alpha.1] - 2020-06-07

### Added

- Infinite loop when navigating between items, activated by setting `[loop]` @Input to `true`. This now replaces old way of looping, which always slid through all the middle items.
- `[itemWidth]` @Input. This input accepts any valid css width value, which in turn sets width of individual gallery items.
- Ability to jump over items when dragging far enough. Previosly, only adjacent items could be selected, no matter how far one dragged.

### Changed

- Detaching items from DOM which are out of scroll proximity. That means that in any given time, only visible items are displayed together with not yet displayed item on each side closest to the displayed ones. That means that if items 4,5,6 are visible, also items 3 and 7 will be in the DOM, but others won't. The number of those items, that are not visible, but still present in the DOM, is dependent on the number of items visible in the gallery viewer.

### Removed

- Old way of looping, which always slid through all the middle items.

## [1.0.0-alpha.0] - 2020-05-23

### Added

- Ability to display multiple items in gallery viewer at once. This is very easily done by setting CSS `width` of `doe-viewer li` to eg. `50%`. Selected item is always centered and items around it are preloaded if lazy loading is on
- Type definition for ng-template context of thumbnail custom template. It's called `ThumbTemplateContext`

### Fixed

- Fixed background flashes in Firefox when new images slide into doe-viewer's scrollport.

[unreleased]: https://github.com/daelmaak/ngx-gallery/compare/v1.1.3...HEAD
[1.1.3]: https://github.com/daelmaak/ngx-gallery/compare/v1.1.3...v1.1.2
[1.1.2]: https://github.com/daelmaak/ngx-gallery/compare/v1.1.2...v1.1.1
[1.1.1]: https://github.com/daelmaak/ngx-gallery/compare/v1.1.1...v1.1.0
[1.1.0]: https://github.com/daelmaak/ngx-gallery/compare/v1.1.0...v1.1.0-RC1
[1.1.0-rc1]: https://github.com/daelmaak/ngx-gallery/compare/v1.1.0-RC1...v1.0.0
[1.0.0]: https://github.com/daelmaak/ngx-gallery/compare/v1.0.0-beta.3...v1.0.0
[1.0.0-beta.3]: https://github.com/daelmaak/ngx-gallery/compare/v1.0.0-beta.2...v1.0.0-beta.3
[1.0.0-beta.2]: https://github.com/daelmaak/ngx-gallery/compare/v1.0.0-beta.0...v1.0.0-beta.2
[1.0.0-beta.0]: https://github.com/daelmaak/ngx-gallery/compare/v1.0.0-alpha.1...v1.0.0-beta.0
[1.0.0-alpha.1]: https://github.com/daelmaak/ngx-gallery/compare/v1.0.0-alpha.0...v1.0.0-alpha.1
[1.0.0-alpha.0]: https://github.com/daelmaak/ngx-gallery/compare/v0.1.0-alpha.6...v1.0.0-alpha.0
