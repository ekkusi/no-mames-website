import {
  ComponentSingleStyleConfig,
  defineStyleConfig,
} from "@chakra-ui/react";

const formatSizeProps = (size: number) => ({
  minWidth: size,
  height: size,
  "> svg": {
    width: size,
    height: size,
  },
});

const Button: ComponentSingleStyleConfig = defineStyleConfig({
  baseStyle: {
    textTransform: "uppercase",
    // border: "2px",
    borderRadius: "3xl",
    py: 5,
    px: 10,
    fontWeight: "semibold",
    _hover: {
      textDecoration: "none",
    },
  },
  variants: {
    outline: ({ colorScheme }) => ({
      border: "2px",
      borderColor: `${colorScheme}.500`,
      color: `${colorScheme}.500`,
      bg: "inherit",
      borderRadius: "md",
      _hover: {
        bg: `${colorScheme}.500`,
        color: "white",
        opacity: 1,
      },
    }),
    solid: ({ colorScheme }) => ({
      borderRadius: "md",
      // border: "2px",
      // bg: `${colorScheme}.100`,
      // _hover: {
      //   bg: `${colorScheme}.100`,
      // },
      // _active: {
      //   bg: `${colorScheme}.100`,
      //   transform: "scale(0.99, 0.97)",
      // },
    }),
    ghost: {
      px: 0,
      py: 0,
      _hover: {
        bg: "inherit",
        opacity: 0.8,
      },
    },
    alert: () => ({
      color: "white",
      border: "none",
      bg: "error",
      borderRadius: "md",
    }),
    link: ({ colorScheme }) => ({
      px: 0,
      py: 0,
      textTransform: "none",
      color: `${colorScheme}.600`,
      _hover: {
        bg: "inherit",
        opacity: 0.7,
        textDecoration: "none",
      },
    }),
  },
  sizes: {
    xs: ({ variant }) => {
      const sizeProps =
        variant === "link" || variant === "ghost" ? formatSizeProps(3) : {};
      return {
        py: 3,
        px: 3,
        fontSize: "xs",
        ...sizeProps,
      };
    },
    sm: ({ variant }) => {
      const sizeProps =
        variant === "link" || variant === "ghost" ? formatSizeProps(4) : {};
      return {
        py: 4,
        px: 4,
        ...sizeProps,
      };
    },
    md: ({ variant }) => {
      const sizeProps =
        variant === "link" || variant === "ghost" ? formatSizeProps(6) : {};
      return {
        py: 5,
        px: 10,
        ...sizeProps,
      };
    },
    lg: ({ variant }) => {
      const sizeProps =
        variant === "link" || variant === "ghost" ? formatSizeProps(8) : {};
      return {
        py: 6,
        px: 12,
        ...sizeProps,
      };
    },
  },
  defaultProps: {
    variant: "solid",
  },
});

export default Button;
