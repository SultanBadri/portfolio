import { Flex, Link, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { css } from "@emotion/react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const linkStyle = (backgroundColor: string) => css`
  padding: 0.375rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  background-color: #e5e7eb;
  transition-duration: 100ms;
  border-radius: 9999px;
  // color: white;

  &:hover {
    background-color: ${backgroundColor};
  }
`;

export default function Footer() {
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
          >
            <FaLinkedin />
          </Link>
        </Tippy>

        <Tippy content="Email">
          <Link
            href="mailto:sultanbadri@berkeley.edu"
            target="_blank"
            aria-label="Email"
            css={linkStyle("#c71610")}
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
