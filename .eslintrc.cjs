module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:playwright/playwright-test',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
    rules: {
      'playwright/missing-playwright-await': 'warn',
      'playwright/prefer-lowercase-title': 'warn',
      'playwright/prefer-to-be': 'warn',
      'playwright/prefer-to-have-length': 'warn',
      'playwright/prefer-strict-equal': 'warn',
      'playwright/max-nested-describe': [
        'warn',
        {
          max: 1,
        },
      ],
      'playwright/no-restricted-matchers': [
        'error',
        {
          toBeFalsy: 'Use `toBe(false)` instead.',
          not: null,
        },
      ],
    },
  };
  