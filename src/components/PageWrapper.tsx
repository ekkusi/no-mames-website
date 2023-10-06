import React from "react";
import { Box } from "@chakra-ui/react";
import { MotionBox } from "./motion-chakra";
import Footer from "./Footer";
import Navigation from "./Navigation";

type PageWrapperProps = {
  children: React.ReactNode;
};

function PageWrapper({ children }: PageWrapperProps) {
  return (
    <Box position="relative">
      <Navigation />
      <MotionBox
        width="100%"
        height="100vh"
        position="fixed"
        bgColor="darkBg"
        zIndex={105}
        initial={{ height: "100vh" }}
        exit={{
          height: "100vh",
        }}
        animate={{
          height: 0,
          transition: {
            delay: 0.5,
            duration: 0.5,
          },
        }}
        transition={{
          duration: 0.3,
        }}
      />
      {children}
      <Footer />
    </Box>
  );
}

export default PageWrapper;
