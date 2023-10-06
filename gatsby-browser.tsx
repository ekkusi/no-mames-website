import React from "react";
import { WrapPageElementNodeArgs } from "gatsby";
import { AnimatePresence } from "framer-motion";
import "@fontsource/rye/400.css";
// import "@fontsource/raleway/400.css";

import { ChakraProvider } from "@chakra-ui/react";
import Navigation from "./src/components/Navigation";
import Footer from "./src/components/Footer";
import theme from "./src/theme";
// import { theme } from "../gatsby-theme-ekkus-design-library";

export const wrapPageElement = ({ element }: WrapPageElementNodeArgs) => {
  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => {
          if (typeof window !== "undefined")
            window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        }}
      >
        {element}
      </AnimatePresence>
    </ChakraProvider>
  );
};

export const shouldUpdateScroll = () => {
  return false;
};
