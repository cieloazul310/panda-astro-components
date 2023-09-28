import { definePreset } from "@pandacss/dev";
import buttonRecipe from "./button.recipe";

const buttonPreset = definePreset({
  theme: {
    extend: {
      recipes: { buttonRecipe },
    },
  },
});

export default buttonPreset;
