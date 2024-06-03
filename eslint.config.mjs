import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';

export default [
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    ignores: [
      'node_modules/',
      'dist/',
      '.logs',
      'docker',
      'dist/*',
      '/dist',
      '/dist*',
      'build/**/*',
      '/logs*',
      'build/**/*',
      '**/*.test.ts',
      'config/*.json',
      'scripts/',
      '.husky',
      '.lintstagedrc'
    ],
    plugins: {
      prettier: prettier,
      tseslint: tseslint
    },
    rules: {
      'prettier/prettier': 'error',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-unused-vars': 'warn',
      'no-console': 'warn'
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended
];
