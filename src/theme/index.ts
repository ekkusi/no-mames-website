"use client";

import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import colors from "./colors";
import {
  Accordion,
  Button,
  Checkbox,
  FormLabel,
  Input,
  Link,
  Popover,
  Radio,
  Tag,
  Textarea,
} from "./components";

const theme = extendTheme(
  {
    fonts: {
      heading: "'Rye', sans-serif",
      body: "'Rye', sans-serif",
    },
    styles: {
      global: () => ({
        "html, body, #root": {
          margin: 0,
          width: "100%",
          minHeight: "100vh",
          color: colors.text,
          bg: colors.bg,
          overflowX: "hidden",
          lineHeigth: 1.2,
        },
        body: {
          fontSize: { base: "xl", md: "2xl" },
        },
        p: {
          marginBottom: "2",
        },
        a: {
          color: colors["light-orange"],
          _hover: {
            opacity: 0.7,
          },
          transition: "opacity 0.2s",
        },
        h1: {
          fontSize: { base: "5xl", md: "6xl" },
          fontWeight: "thin",
          mb: 5,
        },
        h2: {
          fontSize: { base: "3xl", md: "4xl" },
          fontWeight: "thin",
          mb: 4,
          mt: 6,
        },
        h3: {
          fontSize: { base: "xl", md: "2xl" },
          mb: 3,
          mt: 4,
        },
      }),
    },
    components: {
      Button,
      Input,
      Textarea,
      FormLabel,
      Link,
      Tag,
      Accordion,
      Checkbox,
      Popover,
      Radio,
    },
    colors: {
      ...colors,
    },
  },
  withDefaultColorScheme({ colorScheme: "whiteAlpha" })
);

export default theme;
