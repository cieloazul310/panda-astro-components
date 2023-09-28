import { definePreset } from "@pandacss/dev";
import myMonorepoPreset from "@my-monorepo/preset-base";
import buttonPreset from "@my-monorepo/button/preset";

const preset = definePreset({
  presets: [myMonorepoPreset, buttonPreset],
});

export default preset;
