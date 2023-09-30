// @ts-nocheck
import { defineLayerStyles } from "@pandacss/dev";

const layerStyles = defineLayerStyles({
  box: {
    description: "Box with border right and bottom",
    value: {
      bg: "shadcn.background",
      borderWidth: "1px 4px 4px 1px",
      borderColor: "shadcn.primary",
      color: "shadcn.primary",
    },
  },
});

export default layerStyles;
