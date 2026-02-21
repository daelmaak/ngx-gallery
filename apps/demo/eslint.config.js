// @ts-check
import { defineConfig, globalIgnores } from 'eslint/config';
import baseConfig from '../../eslint.config.js';

export default defineConfig([
  globalIgnores(['!**/*']),
  baseConfig,
  {
    files: ['**/*.ts'],

    languageOptions: {
      sourceType: 'script',

      parserOptions: {
        project: ['apps/demo/tsconfig.*?.json'],
      },
    },

    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],

      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    rules: {},
  },
]);
