import '@emotion/react';

declare module '@emotion/react' {
  export interface Color {
    black: string;
    white: string;
    gray100: string;
    gray400: string;
    lightBlack: string;
  }

  export interface FontFamily {
    base: string;
    bold: string;
    light: string;
  }

  export interface FontSize {
    base: string;
    sm: string;
    lg: string;
    xl: string;
  }

  export interface BorderRadius {
    default: string;
  }

  export interface Shadow {
    default: string;
  }

  export interface Theme {
    fontFamily: FontFamily;
    color: Color;
    fontSize: FontSize;
    borderRadius: BorderRadius;
    shadow: Shadow;
  }
}
