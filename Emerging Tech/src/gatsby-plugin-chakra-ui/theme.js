import { theme as defaultTheme } from "@chakra-ui/core"

const theme = {
    ...defaultTheme,
    fonts: {
        ...defaultTheme.fonts,
        heading: "Metropolis",
        body: "Metropolis",
    },
    colors: {
        ...defaultTheme.colors,
        blue: {
            50: "#e1f3ff",
            100: "#b8d7fa",
            200: "#8cbcf2",
            300: "#60a1ec",
            400: "#3686e5",
            500: "#206ccd",
            600: "#1654a0",
            700: "#0d3c73",
            800: "#032447",
            900: "#000c1c",
        },
        gray: {
            50: "#edf1fc",
            100: "#cfd5e3",
            200: "#b0bacd",
            300: "#919eb9",
            400: "#7282a5",
            500: "#58698b",
            600: "#44526d",
            700: "#303a4e",
            800: "#1c2330",
            900: "#050c15",
        },
        yellow: {
            50: "#fef4e0",
            100: "#f0dfbf",
            200: "#e3ca99",
            300: "#d7b573",
            400: "#cca04d",
            500: "#b28633",
            600: "#8b6927",
            700: "#644b1a",
            800: "#3c2d0b",
            900: "#190e00",
        },
    },
}

export default theme
