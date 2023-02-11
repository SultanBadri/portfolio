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
          content="Sultan Badri's personal portfolio website showcasing his skills as a web developer and software engineer."
        />
        <meta
          name="keywords"
          content="Sultan Badri, portfolio, web developer, software engineer, front-end, full-stack"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Sultan Badri | Portfolio" />
        <meta
          property="og:description"
          content="Sultan Badri's personal portfolio website showcasing his skills as a web developer and software engineer."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sultanbadri.vercel.app/" />
        <meta
          property="og:image"
          content="https://sultanbadri.vercel.app/favicon.ico"
        />
        <meta
          property="og:image:alt"
          content="Sultan Badri Portfolio Favicon"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Sultan Badri | Portfolio" />
        <meta
          name="twitter:description"
          content="Sultan Badri's personal portfolio website showcasing his skills as a web developer and software engineer."
        />
        <meta
          name="twitter:image"
          content="https://sultanbadri.vercel.app/favicon.ico"
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
