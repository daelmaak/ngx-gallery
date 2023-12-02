import { ComponentRef } from '@angular/core';

export interface StrictComponentRef<C> extends ComponentRef<C> {
  // `& string` because otherwise keyof would return string | number
  setInput(name: keyof C & string, value: unknown): void;
}
