export abstract class GalleryItem {
  constructor(
    /**
     * Media url
     */
    public src: string,

    /**
     * Url of media thumbnail
     */
    public thumbSrc: string,

    /**
     * Alt text for not yet loaded image
     */
    public alt: string,

    /**
     * Description that is to be shown on the currently displayed gallery item
     */
    public description: string,

    /**
     * Custom data where you can put whatever you want
     */
    public data: any
  ) {}
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

export class GalleryImage extends GalleryItem {
  constructor(
    src,
    thumbSrc?,
    alt?,
    description?,

    /**
     * Sources for <picture>
     */
    public pictureSources?: PictureSource[],

    data?
  ) {
    super(src, thumbSrc, alt, description, data);
  }
}

export class GalleryVideo extends GalleryItem {
  constructor(src, thumbSrc?, alt?, data?, description?) {
    super(src, thumbSrc, alt, description, data);
  }
}

export interface GalleryItemInternal extends GalleryItem {
  /**
   * Marks item as loaded once its media gets loaded
   */
  _loaded?: boolean;

  /**
   * Marks item as seen at least once
   */
  _seen?: boolean;

  /**
   * `true` when media couldn't be loaded
   */
  _failed?: boolean;

  /**
   * `true` when thumbnail couldn't be loaded
   */
  _thumbFailed?: boolean;
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
