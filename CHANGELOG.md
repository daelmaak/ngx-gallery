# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

...

## [1.0.0] - 2020-08-22

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

- Added `[doeMedia]` directive, which is to be used in custom item templates (`[itemTemplate]` @Input). It is not mandatory, but if used it makes the gallery aware of the custom provided media (<img> or <video>), them failing or successfully loading in particular. Without it, the user is responsible for providing some kind of a loading animation and, if needed, reflect on failure to load media, himself.
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

[unreleased]: https://github.com/daelmaak/ngx-doe-gallery/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/daelmaak/ngx-doe-gallery/compare/v1.0.0-beta.3...v1.0.0
[1.0.0-beta.3]: https://github.com/daelmaak/ngx-doe-gallery/compare/v1.0.0-beta.2...v1.0.0-beta.3
[1.0.0-beta.2]: https://github.com/daelmaak/ngx-doe-gallery/compare/v1.0.0-beta.0...v1.0.0-beta.2
[1.0.0-beta.0]: https://github.com/daelmaak/ngx-doe-gallery/compare/v1.0.0-alpha.1...v1.0.0-beta.0
[1.0.0-alpha.1]: https://github.com/daelmaak/ngx-doe-gallery/compare/v1.0.0-alpha.0...v1.0.0-alpha.1
[1.0.0-alpha.0]: https://github.com/daelmaak/ngx-doe-gallery/compare/v0.1.0-alpha.6...v1.0.0-alpha.0
