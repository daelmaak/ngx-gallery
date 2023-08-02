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
   * Is asset a video?
   */
  video?: boolean;

  pictureSources?: PictureSource[];
}

/**
 * The whole interface mirrors <source> attributes from the WHATWG spec.
 */
export interface PictureSource {
  /**
   * src URL
   */
  srcset: string;

  /**
   * CSS media selector
   */
  media?: string;

  /**
   * Give hint to browser which src from srcset to pick
   */
  sizes?: string;

  /**
   * MIME media type
   */
  type?: string;
}

export interface GalleryItemEvent {
  /**
   * Index of the item
   */
  index: number;

  item: GalleryItem;

  /**
   * DOM event
   */
  event: Event;
}

export interface GalleryItemInternal extends GalleryItem {
  /**
   * Marks item as loaded once its media gets loaded
   */
  _loaded?: boolean;

  /**
   * `true` when media couldn't be loaded
   */
  _failed?: boolean;

  /**
   * `true` when thumbnail couldn't be loaded
   */
  _thumbFailed?: boolean;
}
