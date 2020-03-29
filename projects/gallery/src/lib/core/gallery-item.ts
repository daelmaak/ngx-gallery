export interface GalleryItem {
  /**
   * Media url
   */
  src: string;

  /**
   * Url of media thumbnail
   */
  thumbSrc?: string;

  /**
   * Alt text for not yet loaded image
   */
  alt?: string;

  /**
   * Description that is to be shown on the currently displayed gallery item
   */
  description?: string;

  /**
   * Makes item's media be rendered as HTML video.
   * This property doesn't mark youtube videos. Those don't need this flag as they are recongnized automatically
   */
  video?: boolean;

  /**
   * Custom data where you can put whatever you want
   */
  data?: any;
}

export interface GalleryItemInternal extends GalleryItem {
  /**
   * Marks item as loaded once its media gets loaded
   */
  _loaded?: boolean;

  /**
   * Marks item as visited at least once
   */
  _visited?: boolean;
}
