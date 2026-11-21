import { createJiti } from "jiti";

const jiti = createJiti(import.meta.url);

// Validate env vars at build time. jiti lets us load the .ts file here.
await jiti.import("./src/env");

/** @type {import("next").NextConfig} */
const config = {
  output: "standalone",
  transpilePackages: [
    "@family/api",
    "@family/db",
    "@family/ui",
    "@family/validators",
  ],
  /** Lint and typecheck run as their own tasks. */
  typescript: { ignoreBuildErrors: true },
};

export default config;
