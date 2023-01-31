import { Flex, Link, Text, useColorModeValue } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { css } from "@emotion/react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const linkStyle = (backgroundColor: string) => css`
  padding: 0.375rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  transition-duration: 100ms;
  border-radius: 9999px;

  &:hover {
    background-color: ${backgroundColor};
    color: white;
  }
`;

export default function Footer() {
  const color = useColorModeValue("black", "white");
  const backgroundColor = useColorModeValue("gray.100", "whiteAlpha.200");

  return (
    <Flex
      as="footer"
      align="center"
      justifyContent="center"
      direction="column"
      wrap="wrap"
      padding="1rem"
      // bg="teal.500"
    >
      <Flex align="center">
        <Tippy content="GitHub">
          <Link
            href="https://github.com/SultanBadri"
            target="_blank"
            aria-label="GitHub"
            css={linkStyle("#333")}
            color={color}
            bg={backgroundColor}
          >
            <FaGithub />
          </Link>
        </Tippy>

        <Tippy content="LinkedIn">
          <Link
            href="https://www.linkedin.com/in/sultanbadri/"
            target="_blank"
            aria-label="LinkedIn"
            css={linkStyle("#0A66C2")}
            color={color}
            bg={backgroundColor}
          >
            <FaLinkedin />
          </Link>
        </Tippy>

        <Tippy content="Email">
          <Link
            href="mailto:sultanbadri@berkeley.edu"
            target="_blank"
            aria-label="Email"
            css={linkStyle("#BB001B")}
            color={color}
            bg={backgroundColor}
          >
            <FaEnvelope />
          </Link>
        </Tippy>
      </Flex>

      <Text mt="0.5rem" textAlign="center">
        &copy; {new Date().getFullYear()} Sultan Badri
      </Text>
    </Flex>
  );
}
