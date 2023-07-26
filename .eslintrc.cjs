module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:tailwindcss/recommended',
  ],
  parserOptions :{
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2022,
    ecmaFeatures: {
      jsx: false,
    },
  },
  plugins: [
    '@typescript-eslint',
    'tailwindcss',
  ],
  rules: {
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    }],
    'no-undef': 'off',  // off because of nuxt's global import system
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    indent: ['error', 2, { SwitchCase: 1 }],
    'comma-dangle': ['error', 'always-multiline'],
    semi: ['error', 'always'],
    'eol-last': ['error', 'always'],
    'keyword-spacing': ['error', { before: true, after: true }],
    'space-infix-ops': 'error',
    'comma-spacing': ['error', { before: false, after: true }],
    'object-shorthand': 'error',
    'quote-props': ['error', 'as-needed'],
    'sort-imports': ['error', {
      ignoreCase: false,
      ignoreDeclarationSort: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      allowSeparatedGroups: true,
    }],
    'object-curly-spacing': ['error', 'always'],

    // TypeScript
    '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }],
    '@typescript-eslint/no-non-null-assertion': 'off',

    // vue specific
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      },
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    'vue/comma-dangle': [
      'error',
      'always-multiline',
    ],
    'vue/max-len': [
      'error',
      {
        code: 120,
        tabWidth: 2,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
        ignoreHTMLAttributeValues: true,
        ignoreHTMLTextContents: true,
      },
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 1,
        multiline: 1,
      },
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/no-v-html': ['off'],
    'vue/script-indent': ['error', 2, { baseIndent: 0, switchCase: 1 }],
    'vue/first-attribute-linebreak': ['error', {
      singleline: 'beside',
      multiline: 'below',
    }],
    'vue/no-reserved-props': ['error', {
      vueVersion: 3,
    }],
    'vue/multi-word-component-names': 'off',
    'vue/space-infix-ops': 'error',
    'vue/no-unused-vars': 'error',
    'vue/script-setup-uses-vars': 'error',
    'vue/component-api-style': ['error',
      ['script-setup'],
    ],
    'vue/component-tags-order': ['error', {
      order: ['script', 'template', 'style'],
    }],
    'vue/no-multiple-template-root': 'error',

    // tailwind
    'tailwindcss/no-custom-classname': 'off',
  },
};
