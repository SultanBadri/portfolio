import {
  useColorModeValue,
  Flex,
  Heading,
  Box,
  useMediaQuery,
  Text,
} from "@chakra-ui/react";

import { Links } from "@/components/Links";

export function Header() {
  const [isBelow450px] = useMediaQuery("(max-width: 450px)");

  return (
    <>
      <Box
        borderRadius="lg"
        mt={6}
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue("gray.100", "whiteAlpha.200")}
        css={{ backdropFilter: "blur(10px)" }}
      >
        Hello 👋, I&apos;m a student and aspiring developer from the Bay Area!
      </Box>

      <Flex
        mt={6}
        mb={6}
        wrap="wrap"
        justifyContent="space-between"
        flexDirection={isBelow450px ? "column" : "row"}
      >
        <Box>
          <Heading
            as="h1"
            bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
            bgClip="text"
          >
            Sultan Badri
          </Heading>

          <Text>Student / Developer / Designer</Text>
        </Box>
        <Links />
      </Flex>
    </>
  );
}
