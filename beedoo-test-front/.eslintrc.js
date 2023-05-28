module.exports = {
  root: true,
  env: {
    jest: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
  ],
  rules: { 'vue/multi-word-component-names': 0 }
}
