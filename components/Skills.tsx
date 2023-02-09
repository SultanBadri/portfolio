import { Box, Flex, Image, useColorModeValue } from "@chakra-ui/react";

import { icons } from "@/public/data/icons";

export function Skills() {
  const backgroundColor = useColorModeValue("gray.100", "whiteAlpha.200");
  const hoverBackgroundColor = useColorModeValue("gray.200", "whiteAlpha.300");

  return (
    <Box>
      <Flex wrap="wrap">
        {icons.map((icon, index) => (
          <Box
            key={index}
            title={icon.name}
            mt={2}
            p={4}
            rounded="md"
            bg={backgroundColor}
            _hover={{ bg: hoverBackgroundColor }}
            transition="all 0.3s"
          >
            <Image src={icon.src} alt={icon.alt} width={50} height={50} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
