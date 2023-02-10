import Head from "next/head";
import { Container, Heading } from "@chakra-ui/react";

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
  margin-top: 3px;
  margin-bottom: 4px;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Sultan Badri | Portfolio</title>
        <meta
          name="description"
          content="Sultan Badri web development portfolio website."
        />
        <meta
          name="keywords"
          content="Sultan Badri, portfolio, website, student, developer, web development, front-end, full-stack"
        />
      </Head>

      <main>
        <Container maxW="2xl">
          <Header />

          <section id="about">
            <Heading as="h2" size="md" css={sectionStyle}>
              About me
            </Heading>

            <About />
          </section>

          <section id="bio">
            <Heading as="h2" size="md" css={sectionStyle}>
              Bio
            </Heading>

            <Bio />
          </section>

          <section id="skills">
            <Heading as="h2" size="md" css={sectionStyle}>
              Skills
            </Heading>

            <Skills />
          </section>

          <section id="hobbies">
            <Heading as="h2" size="md" css={sectionStyle}>
              Hobbies & Interests
            </Heading>

            <Hobbies />
          </section>

          <section id="projects">
            <Heading as="h2" size="md" css={sectionStyle}>
              Projects
            </Heading>

            <Projects projects={projects} />
          </section>
        </Container>
      </main>
    </>
  );
}
