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
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue("gray.100", "whiteAlpha.200")}
        css={{ backdropFilter: "blur(10px)" }}
      >
        Hello 👋, I&apos;m a student and aspiring developer from the Bay Area!
      </Box>

      <Flex
        mt={3}
        mb={3}
        wrap="wrap"
        justifyContent="space-between"
        flexDirection={isBelow450px ? "column" : "row"}
      >
        <Box>
          <Heading as="h1" variant="page-title">
            Sultan Badri
          </Heading>

          <Text>Student / Developer / Designer</Text>
        </Box>
        <Links />
      </Flex>
    </>
  );
}
