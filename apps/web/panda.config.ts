import { defineConfig } from "@pandacss/dev";
import presetPanda from "@pandacss/preset-panda";
// import myMonorepoPreset from "@my-monorepo/preset-base";
// import buttonPreset from "@my-monorepo/button/preset";
import preset from "@my-monorepo/core/preset";

const buttonJson = require.resolve("@my-monorepo/button/panda.json");
const someComponentJson = require.resolve(
  "@my-monorepo/some-component/panda.json",
);

export default defineConfig({
  presets: [presetPanda, preset],
  // Whether to use css reset
  preflight: true,
  // Where to look for your css declarations
  include: [
    "./src/**/*.{ts,astro}",
    // if you remove this one, the `SomeComponent` styles will be missing in the final css
    "*/**/node_modules/@my-monorepo/some-component/src/panda.json",
    // this one is unnecessary since no `css` function (or style props etc) is directly used in this package
    // but including it should not hurt and would make it future-proof
    // "*/**/node_modules/@my-monorepo/button/dist/panda.json",
    // monorepo
    // "../../packages/some-component/src/panda.json",
    // "../../packages/button/dist/panda.json",
    buttonJson,
    someComponentJson,
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          specificColorFromWebApp: { value: "#262626" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "@my-monorepo/ui-lib",
  emitPackage: true,
});
