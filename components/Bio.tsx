import { Text, Box } from "@chakra-ui/react";

export function Bio() {
  return (
    <Box mt={3} mb={4}>
      <Text>
        <strong>2020 - 2023</strong> Studying @{" "}
        <Text
          as="span"
          bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
          bgClip="text"
          fontWeight="bolder"
        >
          UC Berkeley
        </Text>
      </Text>

      <Text>
        <strong>2022</strong> SWE Intern @{" "}
        <Text
          as="span"
          bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
          bgClip="text"
          fontWeight="bolder"
        >
          Experian
        </Text>
      </Text>

      <Text>
        <strong>2022</strong> Software Programming Instructor
      </Text>

      <Text>
        <strong>2021 - 2022</strong> Design Project Manager
      </Text>
    </Box>
  );
}
