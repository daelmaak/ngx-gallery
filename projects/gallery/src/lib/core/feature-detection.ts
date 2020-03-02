export const clientSide = typeof window !== 'undefined';

export const SUPPORT = {
  overscrollBehavior: clientSide && 'overscrollBehavior' in document.body.style,
  scrollBehavior: clientSide && 'scrollBehavior' in document.body.style,
  nativeMediaLoading: clientSide && 'loading' in Image.prototype,
  intersectionObserver: clientSide && 'IntersectionObserver' in window
};
