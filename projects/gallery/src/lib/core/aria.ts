export interface Aria {
  galleryLabel: string;
  viewerLabel: string;
  thumbnailsLabel: string;
}

export const defaultAria: Aria = {
  galleryLabel: 'Image Gallery',
  viewerLabel: 'Displayed gallery image',
  thumbnailsLabel: 'Gallery thumbnails'
};
