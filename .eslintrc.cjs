module.exports = {
  root: true,
  parserOptions: { project: true, tsconfigRootDir: __dirname },
  extends: ["./node_modules/@10stars/config/.eslintrc"],
  rules: {
    "@typescript-eslint/restrict-template-expressions": 0,
  },
}
