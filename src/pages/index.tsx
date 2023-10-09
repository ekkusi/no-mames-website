import * as React from "react";
import { PageProps, graphql } from "gatsby";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";
import { Button, Flex, Text } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import PageWrapper from "../components/PageWrapper";
import ImageSection from "../components/ImageSection";
import Section from "../components/Section";

function IndexPage({ data }: PageProps<Queries.IndexQuery>) {
  const { t } = useTranslation();
  const headerImage = data.headerImage?.childImageSharp?.gatsbyImageData;
  const sectionImage = data.sectionImage?.childImageSharp?.gatsbyImageData;

  return (
    <PageWrapper>
      <ImageSection image={headerImage}>
        <Text
          as="h1"
          textAlign="center"
          fontSize={{ base: "4xl", md: "5xl" }}
          mb="2"
          width={{ base: "100%", md: "60%" }}
        >
          {t("home.best-burgers-in-asturias")}
        </Text>
        <Text as="span" textAlign="center" mb="5">
          {t("home.orders-to-home")}
        </Text>
        <Text
          as="a"
          href="https://wa.link/a0f7p5"
          target="_blank"
          rel="noreferrer"
          _hover={{ opacity: 1 }}
        >
          <Button size="md">{t("home.order-in-whatsapp")}</Button>
        </Text>
      </ImageSection>
      <Section>
        <Text as="h2" textAlign="center">
          {t("home.welcome")}
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
          nostrum nobis provident molestiae pariatur fugit, alias vitae
          temporibus expedita accusantium tenetur distinctio doloremque facere
          repellat officia minima voluptates dignissimos earum.
        </Text>
        <Flex justifyContent="center" mt="6">
          <Link to="/menu">
            <Button variant="outline">{t("home.see-menu")}</Button>
          </Link>
        </Flex>
      </Section>
      <ImageSection image={sectionImage} height="50vh" />
      <Section>
        <Text as="h2" textAlign="center">
          {t("home.reserve-or-order")}
        </Text>
        <Text>{t("home.reserve-description")}</Text>
        <Flex justifyContent="center" mt="8">
          <Text
            as="a"
            href="https://wa.link/a0f7p5"
            target="_blank"
            rel="noreferrer"
            _hover={{ opacity: 1 }}
          >
            <Button variant="outline">{t("contact-in-whatsapp")}</Button>
          </Text>
        </Flex>
      </Section>
    </PageWrapper>
  );
}

export default IndexPage;

export function Head() {
  const { t } = useTranslation();
  return (
    <>
      <title>No Mames</title>
      <meta name="description" content={t("site-description") || undefined} />
    </>
  );
}

export const query = graphql`
  query Index($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    headerImage: file(relativePath: { eq: "burger.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
    sectionImage: file(relativePath: { eq: "black-burger.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
  }
`;
