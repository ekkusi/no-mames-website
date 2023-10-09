import { Text, BoxProps, Box, Flex } from "@chakra-ui/react";
import {
  GatsbyImage,
  IGatsbyImageData,
  StaticImage,
} from "gatsby-plugin-image";
import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { IStaticImageProps } from "gatsby-plugin-image/dist/src/components/static-image.server";
import Section from "./Section";

type ImageSectionProps = BoxProps & {
  image?: Maybe<IGatsbyImageData>;
  // src: string;
  // imageProps?: Partial<Omit<IStaticImageProps, "src">>;
  title?: string;
};

function ImageSection({ title, image, children, ...rest }: ImageSectionProps) {
  if (title && children) throw new Error("Cannot have both title and children");
  return (
    <Section
      position="relative"
      display="flex"
      justifyContent="center"
      width="100%"
      height={{ base: "100vh", md: "80vh" }}
      isWide
      {...rest}
    >
      {image && (
        <GatsbyImage
          image={image}
          alt="Hero image"
          style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
        />
      )}
      <Flex
        position="absolute"
        top={{ base: "45%", md: "50%" }}
        transform="translateY(-50%)"
        width="100%"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        px="4"
        zIndex={1}
      >
        {title ? <Text as="h1">{title}</Text> : children}
      </Flex>
    </Section>
  );
}

export function LogoImageSection({ children, ...rest }: BoxProps) {
  return (
    <Section
      pt={{ base: 12, md: 4 }}
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

export default ImageSection;
