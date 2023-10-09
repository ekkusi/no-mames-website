import { Box, Flex, FlexProps } from "@chakra-ui/react";
import React from "react";
// import { Link } from "gatsby";
import { Link, useI18next, useTranslation } from "gatsby-plugin-react-i18next";

type NavigationProps = FlexProps;

function Navigation(props: NavigationProps) {
  const { originalPath, languages, language } = useI18next();
  const { t } = useTranslation();

  return (
    <Flex
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
    </Flex>
  );
}

export default Navigation;
