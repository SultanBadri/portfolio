import { Flex, Heading } from "@chakra-ui/react";

import { ToggleTheme } from "./ToggleTheme";

export const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-around"
      wrap="wrap"
      padding="1rem"
    >
      <Flex align="center" mr={5}>
        <Heading as="h2" size="md" letterSpacing={"0.1rem"}>
          Sultan Badri
        </Heading>
      </Flex>
      <ToggleTheme />
    </Flex>
  );
};
