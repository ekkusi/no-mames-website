import { BoxProps } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Section from "./Section";

type HeaderSectionProps = BoxProps & {};

function HeaderSection({ title, ...rest }: HeaderSectionProps) {
  const { t } = useTranslation();
  return (
    <Section
      pt={{ base: 8, md: 4 }}
      pb="0"
      display="flex"
      justifyContent="center"
      {...rest}
    >
      <StaticImage
        src="../images/logo-transparent-bg.png"
        alt="Logo"
        width={250}
        height={250}
        placeholder="blurred"
      />
    </Section>
  );
}

export default HeaderSection;
