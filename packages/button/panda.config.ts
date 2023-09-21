import { defineConfig } from "@pandacss/dev";
import presetPanda from "@pandacss/preset-panda";
import { myMonorepoPreset } from "@my-monorepo/preset";
import { shadcnButton } from "./src/button.recipe";

export default defineConfig({
  presets: [myMonorepoPreset, presetPanda],
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{ts,astro}", "./demo/**/*.{ts,astro}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      recipes: { shadcnButton },
    },
  },

  // The output directory for your css system
  outdir: "@my-monorepo/ui-lib",
  emitPackage: true,
  jsxFramework: "react",
});
