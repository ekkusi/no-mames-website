import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlinePhone, AiOutlineWhatsApp } from "react-icons/ai";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { StaticImage } from "gatsby-plugin-image";
import Section, { SectionProps } from "./Section";

type FooterProps = SectionProps;

function Footer(props: FooterProps) {
  const { t } = useTranslation();
  return (
    <Section
      as="footer"
      display="flex"
      flexDirection={{
        base: "column-reverse",
        md: "row",
      }}
      position="relative"
      justifyContent="center"
      alignItems="center"
      pb={{ base: 16, md: 16 }}
      pt={{ base: 24, md: 16 }}
      backgroundColor="secondary-bg"
      boxShadow="dark-lg"
      isWide
      {...props}
    >
      <Box mr={{ base: 0, md: 10 }}>
        <StaticImage
          src="../images/logo-transparent-bg.png"
          alt="Logo"
          width={250}
          height={250}
          placeholder="blurred"
        />
      </Box>
      <Box mt="-6" mb={{ base: 10, md: 0 }}>
        <Text
          as="h2"
          color="blue"
          mb="4"
          mt="0"
          textAlign={{ base: "center", md: "left" }}
          fontSize={{ base: "4xl", md: "5xl" }}
        >
          {t("footer.contact-us")}
        </Text>
        <Text mb="2">C/ Alarcón, 31 bajo 33204 Gijón</Text>
        <Flex
          as="a"
          // href="https://wa.link/a0f7p5"
          href="tel:638834279"
          target="_blank"
          rel="noreferrer"
          alignItems="center"
          lineHeight="1"
          mb="2"
        >
          <Icon as={AiOutlinePhone} w={7} h={7} mr="1" mb="1" />
          <Text as="span" verticalAlign="middle">
            {t("footer.phone")}: 638834279
          </Text>
        </Flex>
        <Flex
          as="a"
          href="https://wa.link/a0f7p5"
          color="green"
          // href="tel:638834279"
          target="_blank"
          rel="noreferrer"
          alignItems="center"
          lineHeight="1"
        >
          <Icon as={AiOutlineWhatsApp} w={7} h={7} mr="1" mb="1" />
          <Text as="span" verticalAlign="middle">
            {t("contact-in-whatsapp")}
          </Text>
        </Flex>
      </Box>
    </Section>
  );
}

export default Footer;
