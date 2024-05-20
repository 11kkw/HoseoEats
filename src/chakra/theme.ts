import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      100: "#FF3C00",
    },
  },
  fonts: {
    KOHINanum: "KOHINanum, sans-serif",
    KOHIBaeum: "KOHIBaeum, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "white",
        fontFamily: "KOHINanum, sans-serif",
      },
    },
  },
});
