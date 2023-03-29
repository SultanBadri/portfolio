import { Flex, Text, Box, useColorModeValue } from "@chakra-ui/react";

import { css } from "@emotion/react";

const yearStyle = () => css`
  font-weight: 600;
  padding-right: 5px;
`;

export function Bio() {
  const yearColor = useColorModeValue("black", "white");

  return (
    <Box mt={3} mb={4}>
      <Flex>
        <Text css={yearStyle} color={yearColor}>
          2020 - 2023
        </Text>
        Studying @
        <Text
          as="span"
          bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
          bgClip="text"
          fontWeight="bolder"
          paddingLeft={1}
        >
          UC Berkeley
        </Text>
      </Flex>

      <Flex>
        <Text css={yearStyle} color={yearColor}>
          2022
        </Text>
        SWE Intern @
        <Text
          as="span"
          bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
          bgClip="text"
          fontWeight="bolder"
          paddingLeft={1}
        >
          Experian
        </Text>
      </Flex>

      <Flex>
        <Text css={yearStyle} color={yearColor}>
          2022
        </Text>
        Software Programming Instructor
      </Flex>

      <Flex>
        <Text css={yearStyle} color={yearColor}>
          2021 - 2022
        </Text>
        Design Project Manager
      </Flex>
    </Box>
  );
}
