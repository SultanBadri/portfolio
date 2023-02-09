import { useState, useEffect } from "react";
import { Flex, Heading, useColorModeValue } from "@chakra-ui/react";

import { ToggleTheme } from "./ToggleTheme";

export function Navbar() {
  const [scroll, setScroll] = useState(false);
  const backgroundColor = useColorModeValue("white", "gray.800");
  const boxShadow = useColorModeValue("0 4px 8px rgba(0, 0, 0, 0.1)", "lg");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 0) setScroll(true);
      else setScroll(false);
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-around"
      wrap="wrap"
      padding="1rem"
      bg={backgroundColor}
      boxShadow={scroll ? boxShadow : "none"}
      transition="all 0.2s"
      position="sticky"
      top={0}
      width="100%"
      zIndex={10}
    >
      <Flex align="center" mr={5}>
        <Heading as="h2" size="md" letterSpacing={"0.1rem"}>
          Sultan Badri
        </Heading>
      </Flex>
      <ToggleTheme />
    </Flex>
  );
}
