export interface GalleryItem {
  src: string;
  thumbSrc?: string;
  data?: any;
}

export interface GalleryItemInternal extends GalleryItem {
  _loaded: boolean;
  _loading: boolean;
}
