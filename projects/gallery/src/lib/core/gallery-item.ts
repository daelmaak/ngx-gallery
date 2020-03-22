export interface GalleryItem {
  src: string;
  thumbSrc?: string;
  alt?: string;
  video?: boolean;
  data?: any;
}

export interface GalleryItemInternal extends GalleryItem {
  _loaded?: boolean;
  _visited?: boolean;
}
