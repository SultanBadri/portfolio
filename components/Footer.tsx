import { Flex, Text } from "@chakra-ui/react";

import { Links } from "./Links";

export const Footer = () => {
  return (
    <Flex
      as="footer"
      align="center"
      justifyContent="center"
      direction="column"
      wrap="wrap"
      padding="1rem"
    >
      <Links />
      <Text mt="0.5rem" textAlign="center">
        &copy; {new Date().getFullYear()} Sultan Badri
      </Text>
    </Flex>
  );
};
