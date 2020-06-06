# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Infinite loop when navigating between items, activated by setting `[loop]` @Input to `true`. This now replaces old way of looping, which always slid through all the middle items.
- `[itemWidth]` @Input. This input accepts any valid css width value, which in turn sets width of individual gallery items.

### Changed

- Detaching items from DOM which are out of scroll proximity. That means that in any given time, only visible items are displayed together with not yet displayed item on each side closest to the displayed ones. That means that if items 4,5,6 are visible, also items 3 and 7 will be in the DOM, but others won't.

### Removed

- Old way of looping, which always slid through all the middle items.

## [1.0.0-alpha.0] - 2020-05-23

### Added

- Ability to display multiple items in gallery viewer at once. This is very easily done by setting CSS `width` of `doe-viewer li` to eg. `50%`. Selected item is always centered and items around it are preloaded if lazy loading is on
- Type definition for ng-template context of thumbnail custom template. It's called `ThumbTemplateContext`

### Fixed

- Fixed background flashes in Firefox when new images slide into doe-viewer's scrollport.

[unreleased]: https://github.com/daelmaak/ngx-doe-gallery/compare/v1.0.0-alpha.0...HEAD
[1.0.0-alpha.0]: https://github.com/daelmaak/ngx-doe-gallery/compare/v0.1.0-alpha.6...v1.0.0-alpha.0
