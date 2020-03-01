export const SUPPORT = {
  overscrollBehavior: 'overscrollBehavior' in document.body.style,
  scrollBehavior: 'scrollBehavior' in document.body.style,
  nativeMediaLoading: 'loading' in Image.prototype,
  intersectionObserver: 'IntersectionObserver' in window
};
