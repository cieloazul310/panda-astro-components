import { definePreset } from "@pandacss/dev";
import { buttonRecipe } from "./button.recipe";

export const buttonPreset = definePreset({
  theme: {
    extend: {
      recipes: { buttonRecipe },
    },
  },
});
