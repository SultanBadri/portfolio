import { Text, Box, useColorModeValue } from "@chakra-ui/react";

import { css } from "@emotion/react";

const codeStyle = css`
  border-radius: 3px;
  padding: 2px 4px;
  display: inline-block;
`;

export function About() {
  const color = useColorModeValue("black", "white");
  const backgroundColor = useColorModeValue("gray.100", "whiteAlpha.200");

  return (
    <Box mt={3} mb={4}>
      I&apos;m an ambitious and motivated undergraduate student enthusiastic
      about web development, specifically{" "}
      <Text css={codeStyle} bg={backgroundColor} color={color}>
        front-end
      </Text>{" "}
      and{" "}
      <Text css={codeStyle} bg={backgroundColor} color={color}>
        full-stack
      </Text>{" "}
      development. Always eager to learn new and cutting-edge technologies and
      apply my skills and knowledge in a software engineering internship.
      Committed to continuous learning, professional growth, and positive impact
      in the tech industry.
      {/* I built a website for a school club on the Windows
      Notepad app back in high school and I&apos;ve been hooked ever since.
      I&apos;ve been building websites and web apps ever since. My goal is to
      become a full-time software engineer working on the web. */}
    </Box>
  );
}
