import Head from "next/head";
import { Container, Heading, Text } from "@chakra-ui/react";
import {
  FcAbout,
  FcPlanner,
  FcSearch,
  FcLike,
  FcOpenedFolder,
} from "react-icons/fc";

import { Header } from "@/components/Header";
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
  margin-top: 5px;
  margin-bottom: 4px;
`;

const textStyle = () => css`
  display: flex;
  align-items: center;
  vertical-align: bottom;

  svg {
    margin-left: 5px;
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Sultan Badri | Portfolio</title>
      </Head>

      <main>
        <Container maxW="2xl">
          <Header />

          <section id="about">
            <Heading as="h2" size="md" css={sectionStyle}>
              <Text css={textStyle}>
                About me <FcAbout />
              </Text>
            </Heading>

            <About />
          </section>

          <section id="bio">
            <Heading as="h2" size="md" css={sectionStyle}>
              <Text css={textStyle}>
                Work & Education <FcPlanner />
              </Text>
            </Heading>

            <Bio />
          </section>

          <section id="skills">
            <Heading as="h2" size="md" css={sectionStyle}>
              <Text css={textStyle}>
                Skills <FcSearch />
              </Text>
            </Heading>

            <Skills />
          </section>

          <section id="hobbies">
            <Heading as="h2" size="md" css={sectionStyle}>
              <Text css={textStyle}>
                Hobbies & Interests <FcLike />
              </Text>
            </Heading>

            <Hobbies />
          </section>

          <section id="projects">
            <Heading as="h2" size="md" css={sectionStyle}>
              <Text css={textStyle}>
                Projects <FcOpenedFolder />
              </Text>
            </Heading>

            <Projects projects={projects} />
          </section>
        </Container>
      </main>
    </>
  );
}
