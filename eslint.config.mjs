import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // French text contains apostrophes — escaping every one is noisy and unreadable
      "react/no-unescaped-entities": "off",
      // localStorage init via lazy useState initializer is preferred; disable for legacy hooks
      "react-hooks/set-state-in-effect": "off",
    },
  },
]);

export default eslintConfig;
