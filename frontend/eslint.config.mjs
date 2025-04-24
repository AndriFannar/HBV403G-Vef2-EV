import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "url";
import { dirname } from "path";

import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import tseslint from "typescript-eslint";
import pluginJs from "@eslint/js";
import globals from "globals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  { files: ["**/*.{js,mjs,cjs,ts,tsx}"] },

  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      sourceType: "module",
    },
  },

  pluginJs.configs.recommended,

  ...tseslint.configs.recommended,

  {
    plugins: { prettier: prettierPlugin },
    rules: {
      "no-unused-vars": "warn",
      eqeqeq: ["error", "always"],
      "no-magic-numbers": ["warn", { ignore: [0, 1] }],
      camelcase: ["error", { properties: "always" }],
      "comma-dangle": ["error", "never"],
      "prefer-const": ["error", { destructuring: "all" }],
      "no-var": "error",
      "no-console": "warn",
      "prettier/prettier": "error",
    },
  },

  prettierConfig,
];
