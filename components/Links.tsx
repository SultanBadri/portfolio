import { Flex, Link, useColorModeValue } from "@chakra-ui/react";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import { css } from "@emotion/react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

export const linkStyle = (backgroundColorHover: string) => css`
  padding: 0.4rem;
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
  const color = useColorModeValue("black", "white");
  const backgroundColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Flex align="center" mt={2}>
      <Tippy content="GitHub">
        <Link
          href="https://github.com/SultanBadri"
          target="_blank"
          aria-label="GitHub"
          css={linkStyle("#333")}
          bg={backgroundColor}
          color={color}
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
          color={color}
        >
          <FaLinkedin />
        </Link>
      </Tippy>

      <Tippy content="Email">
        <Link
          href="mailto:sultanbadri.cal@gmail.com"
          target="_blank"
          aria-label="Email"
          css={linkStyle("#0099ff")}
          bg={backgroundColor}
          color={color}
        >
          <FaEnvelope />
        </Link>
      </Tippy>
    </Flex>
  );
}
