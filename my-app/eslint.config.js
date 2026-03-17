import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import svelteParser from 'svelte-eslint-parser';

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,

  ...svelte.configs['flat/recommended'],

  prettier,

  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: svelteParser,
      // Ensure you have this if using TypeScript inside Svelte
      // parserOptions: {
      // 	parser: '@typescript-eslint/parser'
      // },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    // Global ignores (replaces .eslintignore)
    ignores: ['build/', '.svelte-kit/', 'dist/', 'node_modules/'],
  },
  {
    rules: {
      'no-unused-vars': 'warn',
      'svelte/no-at-html-tags': 'warn',
    },
  },
];
