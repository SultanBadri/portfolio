import { Box, Heading, Text, Link, useColorModeValue } from "@chakra-ui/react";

import { FaExternalLinkAlt } from "react-icons/fa";

import { Project } from "./Projects";

export function ProjectCard({ title, description, repoUrl }: Project) {
  const linkColor = useColorModeValue("pink.600", "pink.400");

  return (
    <Box w="300px" mt={4}>
      <Heading as="h3" size="sm">
        {title}
      </Heading>

      <Text>{description}</Text>

      <Link
        href={repoUrl}
        target="_blank"
        aria-label="GitHub"
        display="inline-flex"
        alignItems="center"
        color={linkColor}
      >
        Repo link
        <Text as="span" ml={2}>
          <FaExternalLinkAlt />
        </Text>
      </Link>
    </Box>
  );
}
