module.exports = {
  root: true,
  parserOptions: { project: true, tsconfigRootDir: __dirname },
  extends: ["./node_modules/@10stars/config/.eslintrc"],
  overrides: [
    {
      files: ["src/*"],
      rules: {
        "sort-keys-fix/sort-keys-fix": [1, "asc", { caseSensitive: false }],
      },
    },
  ],
  rules: {
    "@typescript-eslint/restrict-template-expressions": 0,
  },
}
