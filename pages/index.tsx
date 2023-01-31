import { Container, Box, useColorModeValue } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue("gray.100", "whiteAlpha.200")}
          css={{ backdropFilter: "blur(10px)" }}
        >
          Hello, I&apos;m a student and developer from the Bay Area!
        </Box>
      </Container>
    </>
  );
}
