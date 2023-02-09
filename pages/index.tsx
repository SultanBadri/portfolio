import Head from "next/head";
import {
  Container,
  Box,
  useColorModeValue,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";

import { Links } from "@/components/Links";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

import { css } from "@emotion/react";

import { projects } from "@/public/data/projects";

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
      <Container maxW="2xl">
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue("gray.100", "whiteAlpha.200")}
          css={{ backdropFilter: "blur(10px)" }}
        >
          Hello 👋, I&apos;m a student and aspiring developer from the Bay Area!
        </Box>

        <Flex align="center" justifyContent="space-between">
          <Box>
            <Heading as="h1" variant="page-title">
              Sultan Badri
            </Heading>
            <p>Student / Developer / Designer</p>
          </Box>
          <Links />
        </Flex>

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

        <section>
          <Heading as="h2" size="md" css={sectionStyle}>
            Skills
          </Heading>

          <Skills />
        </section>

        <section>
          <Heading as="h2" size="md" css={sectionStyle}>
            Hobbies
          </Heading>

          <Text>Coming soon!</Text>
        </section>

        <section>
          <Heading as="h2" size="md" css={sectionStyle}>
            Projects
          </Heading>

          <Projects projects={projects} />
        </section>
      </Container>
    </>
  );
}
