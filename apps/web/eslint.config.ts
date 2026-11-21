import { defineConfig } from "eslint/config";

import { baseConfig, restrictEnvAccess } from "@family/eslint-config/base";
import { nextjsConfig } from "@family/eslint-config/nextjs";
import { reactConfig } from "@family/eslint-config/react";

export default defineConfig(
  {
    ignores: [".next/**"],
  },
  baseConfig,
  reactConfig,
  nextjsConfig,
  restrictEnvAccess,
);
