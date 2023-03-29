import { Box, Heading, Text, Link, useColorModeValue } from "@chakra-ui/react";

import { FaExternalLinkAlt } from "react-icons/fa";

import { Project } from "./Projects";

export function ProjectCard({ title, technologies, repoUrl }: Project) {
  const projectHeaderColor = useColorModeValue("black", "white");
  const linkColor = useColorModeValue("pink.600", "pink.400");

  return (
    <Box w="300px" mt={4}>
      <Heading as="h3" size="sm" color={projectHeaderColor}>
        {title}
      </Heading>

      <Text>{technologies}</Text>

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
