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
    <>
      <Box mt={3} mb={3}>
        A driven and ambitious undergraduate student fueled by a passion for{" "}
        <Text css={codeStyle} bg={backgroundColor} color={color}>
          front-end
        </Text>{" "}
        and{" "}
        <Text css={codeStyle} bg={backgroundColor} color={color}>
          full-stack
        </Text>{" "}
        development. Always on the lookout for new and exciting technologies to
        master and seeking out internship opportunities to gain valuable
        hands-on experience in software engineering. Always eager to learn,
        grow, and make a difference in the field of technology.
      </Box>
    </>
  );
}
