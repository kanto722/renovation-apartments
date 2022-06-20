module.exports = {
  failAfterError: false,
  fix: true,
  reporters: [{ formatter: 'string', console: true }],
  extends: ['stylelint-config-twbs-bootstrap/scss', 'stylelint-order-config-standard'],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    indentation: [2],
    'color-hex-case': 'upper'
  }
};
