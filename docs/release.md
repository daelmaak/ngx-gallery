# Releasing

## Prerequisites

Check that production gallery build works locally. For that, just use the following path in [tsconfig.base.json](../tsconfig.base.json).

```json
      "@daelmaak/ngx-gallery": ["dist/gallery"],
      "@daelmaak/ngx-gallery/*": ["dist/gallery/*"]
```

## Release

There are no manual steps required except for creating a release in GitHub. See [release optimization](https://github.com/daelmaak/ngx-gallery/commit/c88b182ae6edb835fbd44b18ae22e9c62c3148c9) and [release trigger](https://github.com/daelmaak/ngx-gallery/commit/1d1ee7d10da9e2a1b368bedf80becd68136f5639) commits for details.

Basically, each new commit to master is picked up by Release Please lib, which tracks it in a Release PR, and once I want to release, I merge it. This leads to a new tag, which triggers the actual release flow.

Since security got stricter, I need to refresh:

- npm publish token
