module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended' // base or recommended (recommended enforces subjective community defaults to ensure consistency)
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    "no-trailing-spaces": "off", // turned off to improve component scss readability
    "space-before-function-paren": "off",
    "vue/no-v-html": "off", // only used with redactor fields with limited profiles
    "no-useless-escape": "off",
    "vue/require-prop-type-constructor": "off",
    "dot-notation": "off",
    "vue/component-definition-name-casing": "off",
    "padded-blocks": "warn", // left as warning, troubleshooting code add line spaces to parse
    "indent": ["warn", 4],
    "vue/html-indent": ["warn", 4]
  }
}
