import { TemplateRef } from '@angular/core';
import { ObjectFit, Loading, Orientation } from '@ngx-imagery/gallery';

export interface GalleryDetailConfig {
  // TODO should the overlay and gallery config be split?
  // overlay config
  hasBackdrop?: boolean;
  panelClass?: string | string[];
  documentScroll?: boolean;
  // gallery config
  arrows?: boolean;
  imageCounter?: boolean;
  objectFit?: ObjectFit;
  itemTemplate?: TemplateRef<any>;
  loading?: Loading;
  loop?: boolean;
  thumbs?: boolean;
  thumbTemplate?: TemplateRef<any>;
  thumbsAutoScroll?: boolean;
  thumbsOrientation?: Orientation;
  thumbsArrows?: boolean;
  thumbsArrowSlideByLength?: number;
}
