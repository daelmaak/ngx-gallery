export const isBrowser = typeof window !== 'undefined';

export const SUPPORT = {
  scrollBehavior: isBrowser && 'scrollBehavior' in document.body.style,
  nativeMediaLoading: isBrowser && 'loading' in Image.prototype,
  intersectionObserver: isBrowser && 'IntersectionObserver' in window,
};

export const UA = {
  ios: isBrowser && !!window.navigator.userAgent.match(/iP(ad|hone|od)/),
  ie11: !!window['MSInputMethodContext'] && !!document['documentMode'],
};
