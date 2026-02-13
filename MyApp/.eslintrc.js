module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['import', 'unused-imports'],
  rules: {
    // Remove unused imports automatically
    'unused-imports/no-unused-imports': 'error',

    // Enforce import order per CLAUDE.md
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          ['internal'],
          ['parent', 'sibling', 'index'],
          ['object'],
          ['type'],
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'react-native',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'src/**',
            group: 'internal',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react', 'react-native'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],

    // No inline styles
    'react-native/no-inline-styles': 'warn',

    // No unused variables
    'no-unused-vars': 'off',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],

    // Prefer const
    'prefer-const': 'error',

    // No console in production
    'no-console': 'warn',
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
};
