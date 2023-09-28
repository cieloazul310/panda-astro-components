import { defineConfig } from "@pandacss/dev";
import presetPanda from "@pandacss/preset-panda";
// import ship from "@my-monorepo/core/ship";
import preset from "@my-monorepo/core/preset";

export default defineConfig({
  presets: [presetPanda, preset],
  // Whether to use css reset
  preflight: true,
  // Where to look for your css declarations
  include: [
    "./src/**/*.{ts,astro}",
    // if you remove this one, the `SomeComponent` styles will be missing in the final css
    // "./*/**/node_modules/@my-monorepo/some-component/dist/panda.json",
    // "./*/**/node_modules/@my-monorepo/button/dist/panda.json",
    // this one is unnecessary since no `css` function (or style props etc) is directly used in this package
    // but including it should not hurt and would make it future-proof
    // "*/**/node_modules/@my-monorepo/button/dist/panda.json",
    // monorepo
    // "../../packages/some-component/dist/panda.json",
    // "../../packages/button/dist/panda.json",
    // ...ship,
    require.resolve("@my-monorepo/button/panda.json"),
    require.resolve("@my-monorepo/some-component/panda.json"),
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
