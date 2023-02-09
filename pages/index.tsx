import Head from "next/head";
import {
  Container,
  Box,
  useColorModeValue,
  Heading,
  Flex,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

import { Links } from "@/components/Links";
import { About } from "@/components/About";
import { Bio } from "@/components/Bio";
import { Skills } from "@/components/Skills";
import { Hobbies } from "@/components/Hobbies";
import { Projects } from "@/components/Projects";

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
  const [isBelow450px] = useMediaQuery("(max-width: 450px)");

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

        <Flex
          mt={3}
          mb={3}
          wrap="wrap"
          justifyContent="space-between"
          flexDirection={isBelow450px ? "column" : "row"}
        >
          <Box>
            <Heading as="h1" variant="page-title">
              Sultan Badri
            </Heading>

            <Text>Student / Developer / Designer</Text>
          </Box>
          <Links />
        </Flex>

        <section>
          <Heading as="h2" size="md" css={sectionStyle}>
            About me
          </Heading>

          <About />
        </section>

        <section>
          <Heading as="h2" size="md" css={sectionStyle}>
            Bio
          </Heading>

          <Bio />
        </section>

        <section>
          <Heading as="h2" size="md" css={sectionStyle}>
            Skills
          </Heading>

          <Skills />
        </section>

        <section>
          <Heading as="h2" size="md" css={sectionStyle}>
            Hobbies & Interests
          </Heading>

          <Hobbies />
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
