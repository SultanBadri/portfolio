import { useState, useEffect } from "react";
import {
  Flex,
  Heading,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";

import { ToggleTheme } from "./ToggleTheme";

export function Navbar() {
  const [scroll, setScroll] = useState(false);
  const boxShadow = useColorModeValue("0 4px 8px rgba(0, 0, 0, 0.1)", "md");
  const blur = useColorModeValue(
    `blur(${scroll ? "8px" : "0"})`,
    `blur(${scroll ? "16px" : "0"})`
  );
  const [isBelow1000px] = useMediaQuery("(max-width: 1000px)");

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
      justify={isBelow1000px ? "space-between" : "space-around"}
      wrap="wrap"
      padding="0.8rem"
      boxShadow={scroll ? boxShadow : "none"}
      transition="all 0.2s"
      position="sticky"
      top={0}
      width="100%"
      zIndex={10}
      style={{ backdropFilter: blur }}
    >
      <Flex align="center" mr={5}>
        <Heading
          as="h2"
          size="md"
          bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
          bgClip="text"
        >
          Sultan Badri
        </Heading>
      </Flex>

      <ToggleTheme />
    </Flex>
  );
}
