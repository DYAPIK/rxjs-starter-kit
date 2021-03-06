module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json']
  },
  extends: [
    'airbnb-typescript',
  ],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react/state-in-constructor': ['error', 'never'],
    'react/no-array-index-key': 'off',
    'react/prop-types': 'off',
    'react/no-danger': 'error',
    'react/static-property-placement': 'off',
    'react/destructuring-assignment': ['error', 'always', { ignoreClassFields: true }],
    'react/sort-comp': ['error', {
      order: [
        'static-variables',
        'static-methods',
        'instance-variables',
        'getters',
        'setters',
        'lifecycle',
        'render',
        'instance-methods',
        'everything-else'
      ]
    }],
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'off',
    'import/no-cycle': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/type-annotation-spacing': ['error', { 
      'before': false,
      'after': true,
      'overrides': { arrow: { 'before': true, 'after': true }} 
    }],
    'import/order': ['error', { 
      groups: [['builtin', 'external'], 'internal', ['parent', 'sibling'], 'index'],
      'newlines-between': 'always',
    }],
    'import/no-extraneous-dependencies': 'off', // TODO: uncomment ['error', { devDependencies: ['**/test.tsx', '**/test.ts'] }],
    'import/no-internal-modules': 'off', // TODO: ПОДУМОТЬ
    'object-curly-newline': 'off', // TODO: УДОЛИТЬ
    'implicit-arrow-linebreak': 'off', // TODO: УДОЛИТЬ
    'no-restricted-imports': ['error', 'react-jss', '@material-ui/core', '@material-ui/icons', 'i18next', 'react-i18next'], // TODO: УДОЛИТЬ react-jss
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true  }],
    'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
    'no-debugger': 'warn',
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'arrow-parens': ['error', 'as-needed'], // TODO: УДОЛИТЬ
    'no-undef': 'off',
    "max-len": [2, {"code": 120, "tabWidth": 4, "ignoreUrls": true}]
  },
  env: {
    jest: true,
    browser: true,
    node: true,
  },
  globals: {
    window: 'readonly',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['./src'],
      },
    },
  },
};
