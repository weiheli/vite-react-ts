module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      typescript: {
        project: 'tsconfig.json',
      },
    },
  },
  rules: {
    'import/extensions': ['error', 'ignorePackages', {
      ts: 'never', tsx: 'never',
    }],

    'react/jsx-filename-extension': ['error', {
      extensions: ['.tsx'],
    }],

    'react/react-in-jsx-scope': 'off',

    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        'vite.config.ts',
        'jest-setup.ts',
        'src/mocks/**/*.ts?(x)',
        '**/__tests__/**/*.ts?(x)',
        '**/?(*.)+(spec|test).ts?(x)',
      ],
    }],

    'import/prefer-default-export': 'off',

    'global-require': 'off',

    'max-len': 'off',
  },
};
