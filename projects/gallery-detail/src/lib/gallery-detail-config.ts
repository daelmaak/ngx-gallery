import { TemplateRef } from '@angular/core';
import {
  Orientation,
  ImageFit,
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
  loop?: boolean;
  scrollBehavior?: ScrollBehavior;
  scrollSnap?: boolean;
  thumbs?: boolean;
  thumbTemplate?: TemplateRef<any>;
  thumbsAutoScroll?: boolean;
  thumbsOrientation?: Orientation;
  thumbsArrows?: boolean;
  thumbsArrowSlideByLength?: number;
  thumbsOverscrollBehavior?: OverscrollBehavior;
}
