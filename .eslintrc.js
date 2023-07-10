module.exports = {
  extends: ['@nuxtjs/eslint-config-typescript'],
  rules: {
    semi: 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/multi-word-component-names': 0,
    'space-before-function-paren': 0,
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always'
        }
      }
    ]
  }
};
