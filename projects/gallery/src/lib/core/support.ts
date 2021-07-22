export const isBrowser = typeof window !== 'undefined';

export const SUPPORT = {
  scrollBehavior: isBrowser && 'scrollBehavior' in document.body.style,
};

export const UA = {
  ios: isBrowser && !!window.navigator.userAgent.match(/iP(ad|hone|od)/),
  ie11: isBrowser && !!window['MSInputMethodContext'] && !!document['documentMode'],
};
