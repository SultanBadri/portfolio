import { Flex, Link, useColorModeValue } from "@chakra-ui/react";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import { css } from "@emotion/react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

export const linkStyle = (backgroundColorHover: string) => css`
  padding: 0.375rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  transition-duration: 100ms;
  border-radius: 9999px;

  &:hover {
    background-color: ${backgroundColorHover};
    color: white;
  }
`;

export function Links() {
  const backgroundColor = useColorModeValue("gray.100", "whiteAlpha.200");

  return (
    <Flex align="center" mt={2}>
      <Tippy content="GitHub">
        <Link
          href="https://github.com/SultanBadri"
          target="_blank"
          aria-label="GitHub"
          css={linkStyle("#333")}
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
          bg={backgroundColor}
        >
          <FaEnvelope />
        </Link>
      </Tippy>
    </Flex>
  );
}
