import { definePreset } from "@pandacss/dev";
import semanticTokens from "./semantic-tokens";
import textStyles from "./textStyles";
import layerStyles from "./layerStyles";

const myMonorepoPreset = definePreset({
  conditions: {
    light: "[data-color-mode=light] &",
    dark: "[data-color-mode=dark] &",
  },
  theme: {
    extend: {
      textStyles,
      layerStyles,
      tokens: {
        colors: {
          "nice-yellow": { value: "#facc15" },
        },
      },
      semanticTokens: {
        colors: {
          ...semanticTokens.colors,
        },
      },
    },
  },
});

export default myMonorepoPreset;
