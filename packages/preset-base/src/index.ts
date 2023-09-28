import { definePreset } from "@pandacss/dev";
import semanticTokens from "./semantic-tokens";

const myMonorepoPreset = definePreset({
  theme: {
    extend: {
      tokens: {
        colors: {
          "nice-yellow": { value: "#facc15" },
        },
      },
      semanticTokens: {
        colors: {
          ...semanticTokens.colors,
          "my-monorepo": {
            "nice-yellow": { value: "{colors.nice-yellow}" },
          },
        },
      },
    },
  },
});

export default myMonorepoPreset;
