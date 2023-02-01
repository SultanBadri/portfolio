import Head from "next/head";

import {
  Container,
  Box,
  useColorModeValue,
  Heading,
  Text,
} from "@chakra-ui/react";
import { css } from "@emotion/react";

const sectionStyle = () => css`
  text-decoration: underline;
  font-size: 20px;
  text-underline-offset: 6px;
  text-decoration-color: #525252;
  text-decoration-thickness: 4px;
  margin-top: 3px;
  margin-bottom: 4px;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Sultan Badri | Portfolio</title>
      </Head>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue("gray.100", "whiteAlpha.200")}
          css={{ backdropFilter: "blur(10px)" }}
        >
          Hello, I&apos;m a student and developer from the Bay Area!
        </Box>

        <Box>
          <Heading as="h1" variant="page-title">
            Sultan Badri
          </Heading>

          <p>Student / Developer / Designer</p>
        </Box>

        <section>
          <Heading as="h2" size="md" css={sectionStyle}>
            About me
          </Heading>

          <Text>An aspiring developer.</Text>
        </section>

        <section>
          <Heading as="h2" size="md" css={sectionStyle}>
            Bio
          </Heading>

          <Text>2017 - Not born</Text>
          <Text>2018 - Born</Text>
        </section>
      </Container>
    </>
  );
}
