# Releasing

## Prerequisites

- Check that production gallery build works locally. For that, just use the following path in [tsconfig.base.json](../tsconfig.base.json).

```json
      "@daelmaak/ngx-gallery": ["dist/gallery"],
      "@daelmaak/ngx-gallery/*": ["dist/gallery/*"]
```

## Release

There are no manual steps required except for creating a release in GitHub. See https://github.com/daelmaak/ngx-gallery/commit/c88b182ae6edb835fbd44b18ae22e9c62c3148c9 for details.
