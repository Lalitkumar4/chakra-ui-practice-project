import { extendTheme, defineStyleConfig } from "@chakra-ui/react"

// extend the theme
const colors = {
  brand: {
    900: "#24fc9",
    800: "#146af5",
    700: "#2977f2",
    600: "#337df2",
    500: "#4287f5",
  },
}

const fonts = {
  body: "Tahoma",
  heading: "Courier New",
}

// Change Button component style
const Button = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    fontWeight: "bold",
    // textTransform: "uppercase",
    borderRadius: "base",
  },

  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: "sm",
      px: 4,
      py: 3,
    },
    md: {
      fontSize: "md",
      px: 6,
      py: 4,
    },
  },

  // Two variants: outline and solid
  variants: {
    outline: {
      border: "2px solid",
      borderColor: "teal.500",
      color: "teal.500",
    },
    solid: {
      bg: "teal.500",
      color: "white",
    },
  },

  // The default size and variant values
  defaultProps: {
    size: "md",
    variant: "outline",
  },
})

const theme = extendTheme({ colors, fonts, components: { Button } })

export default theme
