import { definePreset } from "@pandacss/dev";
import { shadcnButton } from "./button.recipe";

export const buttonPreset = definePreset({
  theme: {
    extend: {
      recipes: { shadcnButton },
    },
  },
});
