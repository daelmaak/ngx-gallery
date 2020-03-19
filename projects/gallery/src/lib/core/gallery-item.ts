export interface GalleryItem {
  src: string;
  thumbSrc?: string;
  alt?: string;
  data?: any;
}

export interface GalleryItemInternal extends GalleryItem {
  _loaded?: boolean;
  _visited?: boolean;
}
