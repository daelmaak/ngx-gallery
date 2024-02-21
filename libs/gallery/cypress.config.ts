import { nxComponentTestingPreset } from '@nx/angular/plugins/component-testing';
import { defineConfig } from 'cypress';

export default defineConfig({
  component: nxComponentTestingPreset(__filename),
  defaultCommandTimeout: 1000,
  viewportWidth: 600,
  viewportHeight: 700,
  waitForAnimations: false,
});
