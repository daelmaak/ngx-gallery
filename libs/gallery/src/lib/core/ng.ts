import { ComponentRef, SimpleChange, SimpleChanges } from '@angular/core';

export interface StrictComponentRef<C> extends ComponentRef<C> {
  // `& string` because otherwise keyof would return string | number
  setInput(name: keyof C & string, value: unknown): void;
}

export type StrictSimpleChanges<T> = SimpleChanges & {
  [propName in keyof T]: SimpleChange | undefined;
};
