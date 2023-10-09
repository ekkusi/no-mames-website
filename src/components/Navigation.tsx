import {
  Box,
  Flex,
  FlexProps,
  SimpleGrid,
  Text,
  useToken,
} from "@chakra-ui/react";
import React, { useState } from "react";
// import { Link } from "gatsby";
import { Link, useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import { Variants } from "framer-motion";
import HamburgerButton from "./HamburgerButton";
import { MotionBox } from "./motion-chakra";
import { hexToRgbA } from "../utils/color";

type NavigationProps = FlexProps;

const navigationVariants: Variants = {
  open: {
    opacity: 1,
    display: "flex",
  },
  closed: {
    opacity: 0,
    transitionEnd: {
      display: "none",
    },
  },
};

function Navigation(props: NavigationProps) {
  const { originalPath, languages, language } = useI18next();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { t } = useTranslation();
  const bgColor = useToken("colors", "bg");
  const bgWithOpacity = hexToRgbA(bgColor, 0.97);

  return (
    <>
      {/* <Flex
        justifyContent="space-between"
        alignItems="center"
        position="absolute"
        width="100%"
        zIndex="101"
        top="4"
        px="4"
        {...props}
      >
        <Link to="/">{t("header.home")}</Link>
        <Flex mr="-1">
          {languages.map((lang) => (
            <Box
              key={lang}
              px="1"
              lineHeight="1"
              borderRight="2px solid"
              borderColor="light-orange"
              textDecoration={lang === language ? "underline" : "none"}
              _last={{ borderWidth: 0 }}
            >
              <Link
                to={originalPath}
                language={lang}
                style={{ pointerEvents: lang === language ? "none" : "auto" }}
              >
                {lang}
              </Link>
            </Box>
          ))}
        </Flex>
      </Flex> */}
      <Flex mr="-1" position="absolute" top="4" left="2" zIndex={1}>
        {languages.map((lang) => (
          <Box
            key={lang}
            px="1"
            lineHeight="1"
            borderRight="2px solid"
            borderColor="light-orange"
            textDecoration={lang === language ? "underline" : "none"}
            _last={{ borderWidth: 0 }}
          >
            <Link
              to={originalPath}
              language={lang}
              style={{ pointerEvents: lang === language ? "none" : "auto" }}
            >
              {lang}
            </Link>
          </Box>
        ))}
      </Flex>
      <HamburgerButton
        isOpen={isNavOpen}
        onClick={() => setIsNavOpen(!isNavOpen)}
        color="orange.500"
        position="fixed"
        right="2"
        top="4"
        zIndex={3}
      />
      <MotionBox
        as="nav"
        display="flex"
        variants={navigationVariants}
        animate={isNavOpen ? "open" : "closed"}
        alignItems="center"
        justifyContent="center"
        position="fixed"
        top="0"
        left="0"
        bottom="0"
        right="0"
        bg={bgWithOpacity}
        zIndex={2}
      >
        <SimpleGrid
          columns={1}
          gap="3"
          textAlign="center"
          fontSize={{ base: "2xl", md: "3xl" }}
        >
          <Link to="/" onClick={() => setIsNavOpen(false)}>
            {t("header.home")}
          </Link>
          <Link to="/menu" onClick={() => setIsNavOpen(false)}>
            {t("header.menu")}
          </Link>
          <Text
            as="a"
            href="#footer"
            onClick={(e) => {
              e.preventDefault();
              const footer = document.getElementById("footer");
              footer?.scrollIntoView({ behavior: "smooth" });

              setIsNavOpen(false);
            }}
          >
            {t("header.contact")}
          </Text>
        </SimpleGrid>
      </MotionBox>
    </>
  );
}

export default Navigation;
