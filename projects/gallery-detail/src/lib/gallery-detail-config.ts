import { Orientation } from 'projects/gallery/src/public-api';
import { TemplateRef } from '@angular/core';

export interface GalleryDetailConfig {
  // TODO should the overlay and gallery config be split?
  // overlay config
  hasBackdrop?: boolean;
  panelClass?: string | string[];
  documentScroll?: boolean;
  keyboardNavigation?: boolean;
  // gallery config
  arrows?: boolean;
  imageTemplate?: TemplateRef<any>;
  loop?: boolean;
  thumbTemplate?: TemplateRef<any>;
  thumbsOrientation?: Orientation;
  thumbsScroll?: boolean;
  thumbsArrows?: boolean;
  thumbsArrowSlideTime?: number;
  thumbsArrowSlideByLength?: number;
}
