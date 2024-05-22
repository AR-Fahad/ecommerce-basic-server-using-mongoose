import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint, { config } from 'typescript-eslint';

export default [
  {
    languageOptions: { globals: globals.node },
    rules: {
      'no-unused-vars': 'error',
      'no-unused-expressions': 'error',
      'prefer-const': 'error',
      'no-console': 'warn',
      'no-undef': 'error',
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
