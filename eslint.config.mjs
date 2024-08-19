import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: { ...globals.node }, // Aquí incluimos las globales de Node.js
    },
    rules: {
      "no-console": 0,
    },
  },
  {
    ignores: ["dist/"],
  },
  {
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
];
