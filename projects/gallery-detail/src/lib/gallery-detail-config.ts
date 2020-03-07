import { TemplateRef } from '@angular/core';
import {
  ImageFit,
  Loading,
  Orientation,
  OverscrollBehavior
} from '@ngx-imagery/gallery';

export interface GalleryDetailConfig {
  // TODO should the overlay and gallery config be split?
  // overlay config
  hasBackdrop?: boolean;
  panelClass?: string | string[];
  documentScroll?: boolean;
  // gallery config
  arrows?: boolean;
  imageCounter?: boolean;
  imageFit?: ImageFit;
  imageTemplate?: TemplateRef<any>;
  loading?: Loading;
  loop?: boolean;
  scrollBehavior?: ScrollBehavior;
  thumbs?: boolean;
  thumbTemplate?: TemplateRef<any>;
  thumbsAutoScroll?: boolean;
  thumbsOrientation?: Orientation;
  thumbsArrows?: boolean;
  thumbsArrowSlideByLength?: number;
  thumbsOverscrollBehavior?: OverscrollBehavior;
}
