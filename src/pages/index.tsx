import * as React from "react";
import { graphql } from "gatsby";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";
import { Button, Text } from "@chakra-ui/react";
import PageWrapper from "../components/PageWrapper";
import HeaderSection from "../components/HeaderSection";
import Section from "../components/Section";

function IndexPage() {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <HeaderSection />
      <Section textAlign="center">
        <Text as="h1">No Mames</Text>
        <Text as="h2">{t("home.welcome")}</Text>
        <Link to="/menu">
          <Button variant="outline">{t("home.to-menu")}</Button>
        </Link>
      </Section>
    </PageWrapper>
  );
}

export default IndexPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
