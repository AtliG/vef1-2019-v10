module.exports = {
  extends: 'airbnb-base',
  env: {
    browser: true
  },
  rules: {
    // 'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    'no-console': 'off',
  },
  plugins: ['import'],
};
