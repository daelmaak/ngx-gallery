import { GalleryItem } from '../../core';

export interface ImageClickEvent {
  item: GalleryItem;
  index: number;
  event: Event;
}
