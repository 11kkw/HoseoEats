import React from "react";
import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'KOHIBaeum';
        src: url('/fonts/KOHIBaeum.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
      }
      @font-face {
        font-family: 'KOHINanum';
        src: url('/fonts/KOHINanum.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
      }
    `}
  />
);

export default Fonts;
