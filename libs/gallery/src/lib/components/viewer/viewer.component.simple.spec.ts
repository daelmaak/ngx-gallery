import { ChangeDetectionStrategy } from '@angular/core';
import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import type { GalleryItemInternal } from '../../core/gallery-item';
import type { StrictComponentRef } from '../../core/ng';
import { ViewerComponent } from './viewer.component';

describe('ViewerComponent', () => {
  let viewer: ViewerComponent;
  let viewerRef: StrictComponentRef<ViewerComponent>;
  let fixture: ComponentFixture<ViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({})
      .overrideComponent(ViewerComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerComponent);
    viewer = fixture.componentInstance;
    viewerRef = fixture.componentRef;
    viewerRef.setInput('items', [
      { src: 'src1' },
      { src: 'src2' },
      { src: 'src3' },
      { src: 'src4' },
    ]);
    viewerRef.setInput('loading', 'lazy');
    viewerRef.setInput('selectedIndex', 0);
  });

  describe('media asset loading', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(ViewerComponent);
      viewer = fixture.componentInstance;
      viewerRef = fixture.componentRef;
      viewerRef.setInput('items', [{ src: 'src1' }, { src: 'src2' }]);
      viewerRef.setInput('showErrors', true);
    });

    describe('failed', () => {
      it('should mark item as failed to load', () => {
        const failingItem = viewer.items[0] as GalleryItemInternal;

        viewer.onItemErrored(failingItem);

        expect(viewer.itemFailedToLoad(failingItem)).toBe(true);
      });
    });
  });
});
