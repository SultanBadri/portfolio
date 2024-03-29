import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { Text, Box, useColorModeValue } from "@chakra-ui/react";

import { css } from "@emotion/react";

const codeStyle = css`
  display: inline-block;
  font-weight: 600;

  &::before {
    content: "\`";
  }

  &::after {
    content: "\`";
  }
`;

const buttonStyle = css`
  display: inline-flex;
  align-items: center;
  color: inherit;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export function About() {
  const textColorOverride = useColorModeValue("blackAlpha.800", "#94a3b8");
  const wordColorOverride = useColorModeValue("black", "white");
  const buttonColor = useColorModeValue("pink.600", "pink.400");

  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => setShowMore(!showMore);

  return (
    <Box mt={3} mb={4} lineHeight={7}>
      I&apos;m an ambitious and motivated student enthusiastic about{" "}
      <Text css={codeStyle} color={wordColorOverride}>
        programming
      </Text>{" "}
      and{" "}
      <Text css={codeStyle} color={wordColorOverride}>
        software development
      </Text>
      . Always looking to enhance my existing skills while eagerly embracing new
      ones to apply to real-world projects. Committed to continuous learning,
      professional growth, and making a positive impact in the tech industry.
      <Box mt={3} color={buttonColor}>
        <Box as="button" onClick={handleShowMore} css={buttonStyle}>
          <FaAngleDown
            style={{
              transition: "transform 0.2s ease-in-out",
              transform: `rotate(${showMore ? "180deg" : "0deg"})`,
            }}
          />

          <Box as="span" ml="2">
            {showMore ? "Show less" : "Learn more"}
          </Box>
        </Box>

        {showMore && (
          <Text mt={3} color={textColorOverride}>
            I discovered my passion for programming in high school, when I built
            a website for a school club using the Windows Notepad app. Since
            then, I have been building websites and web apps as a hobby, and
            eventually decided to pursue it as a career. I used{" "}
            <Text css={codeStyle} color={wordColorOverride}>
              The Odin Project
            </Text>
            &apos;s Full-stack JavaScript curriculum to further develop my
            skills and build projects that honed my{" "}
            <Text css={codeStyle} color={wordColorOverride}>
              front-end
            </Text>{" "}
            skills, while also teaching me{" "}
            <Text css={codeStyle} color={wordColorOverride}>
              full-stack
            </Text>{" "}
            development using the{" "}
            <Text css={codeStyle} color={wordColorOverride}>
              MERN
            </Text>{" "}
            stack. My goal is to develop software professionally!
          </Text>
        )}
      </Box>
    </Box>
  );
}
