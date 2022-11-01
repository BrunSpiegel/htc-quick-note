export const globalTheme = {
  colors: {
    background: "#fff",
    black: "#000",
    primary500: "#432874",
    primary700: "#36205D",
    secundary500: "#FFCC18",
    grey100: "#F5F5F5",
    grey300: "#C4C4C4",
    grey500: "#999999",
    grey800: "#727273",
  },
  fonts: {
    main: "Barlow, sans-serif"
  },
} as const;

export type GlobalTheme = typeof globalTheme 