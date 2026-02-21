// @ts-check
import { defineConfig, globalIgnores } from 'eslint/config';
// eslint-disable-next-line @nx/enforce-module-boundaries
import baseConfig from '../../eslint.config.js';

export default defineConfig([
  baseConfig,
  globalIgnores(['!**/*', 'libs/gallery/cypress/**/*']),
  {
    files: ['src/**/*.ts'],

    languageOptions: {
      parserOptions: {
        project: ['libs/gallery/tsconfig.*?.json'],
      },
    },

    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: '',
          style: 'camelCase',
        },
      ],

      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: '',
          style: 'kebab-case',
        },
      ],

      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
    },
  },
]);
