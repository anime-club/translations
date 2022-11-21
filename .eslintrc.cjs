const { join } = require("path")

module.exports = {
  parserOptions: {
    project: join(__dirname, "tsconfig.json"),
  },
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
