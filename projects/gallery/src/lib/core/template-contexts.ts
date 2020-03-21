import { GalleryItem } from './gallery-item';

export interface ItemTemplateContext {
  index: number;
  selectedIndex: number;
  item: GalleryItem;
  visited: boolean;
}
