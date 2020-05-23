import { GalleryItem } from './gallery-item';

export interface ItemTemplateContext {
  index: number;
  selectedIndex: number;
  item: GalleryItem;
  seen: boolean;
}

export interface ThumbTemplateContext {
  index: number;
  selectedIndex: number;
  item: GalleryItem;
}
