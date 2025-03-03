import config from "@10stars/config/eslint.config.node"
import type { ConfigArray } from "typescript-eslint"

export default [
  ...config,
  {
    rules: {
      /**
       * if you want to modify rules, do it here
       * please also inform the team of the change
       * @example "@typescript-eslint/no-magic-numbers": 0,
       */
      "@typescript-eslint/restrict-template-expressions": 0,
    },
  },
] satisfies ConfigArray
