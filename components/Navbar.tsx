import { Flex, Heading } from "@chakra-ui/react";

import ToggleTheme from "./ToggleTheme";

export default function Navbar() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-around"
      wrap="wrap"
      padding="1rem"
      // bg="teal.500"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          Sultan Badri
        </Heading>
      </Flex>
      <ToggleTheme />
    </Flex>
  );
}
