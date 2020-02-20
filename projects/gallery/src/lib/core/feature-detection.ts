export const SUPPORT = {
  overscrollBehavior: 'overscrollBehavior' in document.body.style,
  scrollBehavior: 'scrollBehavior' in document.body.style,
  nativeImageLoading: 'loading' in Image.prototype
};
