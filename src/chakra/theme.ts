import { extendTheme, theme as base } from "@chakra-ui/react";
import { Button } from "./button";

export const theme = extendTheme({
  colors: {
    brand: {
      100: "#FF3C00",
    },
  },
  fonts: {},
  styles: {
    global: () => ({
      body: {
        bg: "white",
        fontFamily: "KOHBaeum, sans-serif", // 전역 폰트 설정
      },
    }),
  },
  components: {
    Button,
  },
});
