// @ts-nocheck
import { defineLayerStyles } from "@pandacss/dev";

const layerStyles = defineLayerStyles({
  box: {
    description: "Box with border right and bottom",
    value: {
      bg: "shadcn.background",
      borderRightWidth: "4px",
      borderBottomWidth: "4px",
      borderColor: "shadcn.primary",
      color: "shadcn.primary",
    },
  },
});

export default layerStyles;
