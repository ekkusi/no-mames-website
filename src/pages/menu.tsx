import * as React from "react";
import { graphql, HeadProps, type PageProps } from "gatsby";
import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import PageWrapper from "../components/PageWrapper";
import { LogoImageSection } from "../components/ImageSection";
import Section from "../components/Section";

type Language = "es" | "en";

function MenuPage({ data }: PageProps<Queries.MenuQuery>) {
  const { t } = useTranslation();
  const lang = useI18next().language as Language;

  const menu = data.allMenuJson.edges.map((edge) => edge.node);
  return (
    <PageWrapper>
      <LogoImageSection />
      <Section py="10">
        <Flex flexDirection="column" alignItems="center">
          <Text as="h2" fontSize={{ base: "2xl", md: "4xl" }}>
            {t("menu.orders-to-home")}
          </Text>
          <Text
            as="a"
            href="https://wa.link/a0f7p5"
            target="_blank"
            rel="noreferrer"
            _hover={{ opacity: 1 }}
          >
            <Button size="md">{t("menu.order-in-whatsapp")}</Button>
          </Text>
        </Flex>
      </Section>
      <Section pt="12">
        <Text as="h1" textAlign="center">
          {t("menu.menu")}
        </Text>
        <SimpleGrid columns={1} spacing={0} lineHeight={1}>
          {menu.map((section) => (
            <Box key={section.id}>
              <Text as="h2" color={section.colorKey || ""}>
                {section.name?.[lang]}
              </Text>
              <Box>
                {section.items?.map((item, index) => (
                  <Flex
                    key={item?.name?.en || index}
                    flexDirection="row"
                    justifyContent="space-between"
                    mb="2"
                  >
                    <Box mb="1" mr="1">
                      <Text mb="0">{item?.name?.[lang]}</Text>
                      {item?.description && (
                        <Text as="span" fontSize={{ base: "md", md: "lg" }}>
                          {item?.description?.[lang]}
                        </Text>
                      )}
                    </Box>
                    <Text as="span">{item?.price?.toFixed(2)}€</Text>
                  </Flex>
                ))}
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Section>
    </PageWrapper>
  );
}

export default MenuPage;

export function Head({ location }: HeadProps) {
  const isEN = location.pathname.startsWith("/en");
  let description =
    "Restaurante mexicano en Gijón. Las mejores hamburguesas en Asturias.";
  if (isEN) {
    description = "Mexican restaurant in Gijón. The best burgers in Asturias.";
  }

  return (
    <>
      <title>{isEN ? "Menu" : "Menú"}</title>
      <meta name="description" content={description} />
    </>
  );
}

export const query = graphql`
  query Menu($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allMenuJson {
      edges {
        node {
          id
          name {
            es
            en
          }
          colorKey
          items {
            name {
              es
              en
            }
            description {
              es
              en
            }
            price
          }
        }
      }
    }
  }
`;
