
// eslint-disable-next-line
// @ts-ignore
import { PaletteColor } from "@mui/material";

declare module "@mui/material/styles/createPalette" {
    export interface PaletteColor {
      [key: number]: string;
    } 
  
    export interface Palette {
      tertiary: PaletteColor;
    }
  }