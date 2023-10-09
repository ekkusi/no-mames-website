import React from "react";
import { WrapPageElementNodeArgs } from "gatsby";
import { AnimatePresence } from "framer-motion";
import "@fontsource/rye/400.css";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "./src/theme";

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
