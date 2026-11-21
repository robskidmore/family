import { defineConfig } from "eslint/config";

import { baseConfig } from "@family/eslint-config/base";

export default defineConfig(
  {
    ignores: ["dist/**"],
  },
  baseConfig,
);
