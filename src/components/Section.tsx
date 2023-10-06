import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

export type SectionProps = BoxProps & {
  isWide?: boolean;
  colorMode?: "dark" | "light";
};

function Section({
  children,
  colorMode = "dark",
  isWide = false,
  ...rest
}: SectionProps) {
  return (
    <Box
      as="section"
      width="100%"
      py={40}
      px={isWide ? 0 : 5}
      color={colorMode === "light" ? "text-light" : "text"}
      bgColor={colorMode === "light" ? "light-bg" : "bg"}
      {...rest}
    >
      {isWide ? (
        children
      ) : (
        <Box
          maxWidth={{ base: "100%", md: "800px" }}
          mx={{ base: 0, md: "auto" }}
        >
          {children}
        </Box>
      )}
    </Box>
  );
}

export default Section;
