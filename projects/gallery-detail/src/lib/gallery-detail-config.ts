import { Orientation } from 'projects/gallery/src/lib/core/orientation';

export interface GalleryDetailConfig {
  items?: string[];
  thumbsOrientation?: Orientation;
  hasBackdrop?: boolean;
  panelClass?: string | string[];
}
