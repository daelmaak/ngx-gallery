export type Orientation = 'top' | 'bottom' | 'left' | 'right';

export const enum OrientationFlag {
  LEFT = 2,
  RIGHT = 4,
  TOP = 8,
  BOTTOM = 16,
  HORIZONTAL = 6,
  VERTICAL = 24
}

export const orientations = {
  left: OrientationFlag.LEFT,
  right: OrientationFlag.RIGHT,
  top: OrientationFlag.TOP,
  bottom: OrientationFlag.BOTTOM
};
