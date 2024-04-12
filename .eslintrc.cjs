module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['react', 'prettier', '@typescript-eslint'],
  rules: {
    curly: 0,
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-script-url': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'max-len': ['error', { code: 1000, ignoreComments: true }],
    semi: 0,
    'comma-dangle': 0,
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'import/no-named-as-default': 0,
    '@typescript-eslint/no-unused-expressions': [
      'error',
      { allowTernary: true, allowShortCircuit: true },
    ],
    'react/require-default-props': [0, { forbidDefaultForRequired: true }],
    'react/function-component-definition': [
      2,
      {
        namedComponents: [
          'function-declaration',
          'function-expression',
          'arrow-function',
        ],
        unnamedComponents: ['function-expression', 'arrow-function'],
      },
    ],
    'react/jsx-props-no-spreading': 0,
    'react/no-unknown-property': [
      'error',
      {
        ignore: [
          'unselectable',
          'castShadow',
          'shadow-mapSize-height',
          'shadow-mapSize-width',
          'intensity',
          'position',
          'transparent',
          'metalness',
          'roughness',
        ],
      },
    ],
    'import/no-cycle': 0,
  },
  ignorePatterns: [
    '.eslintrc.cjs',
    'vite.config.ts',
    'tailwind.config.js',
    'postcss.config.js',
  ],
};
