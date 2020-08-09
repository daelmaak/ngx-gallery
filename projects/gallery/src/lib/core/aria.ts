export interface Aria {
  galleryLabel?: string;
  viewerLabel: string;
  thumbnailsLabel: string;
}

export const defaultAria: Aria = {
  viewerLabel: 'Displayed gallery image',
  thumbnailsLabel: 'Gallery thumbnails',
};
