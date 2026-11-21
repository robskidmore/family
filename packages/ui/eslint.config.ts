import { defineConfig } from "eslint/config";

import { baseConfig } from "@family/eslint-config/base";
import { reactConfig } from "@family/eslint-config/react";

export default defineConfig(
  {
    ignores: ["dist/**"],
  },
  baseConfig,
  reactConfig,
);
