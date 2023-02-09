import { Box, Heading, Text, Link } from "@chakra-ui/react";

import { FaExternalLinkAlt } from "react-icons/fa";

import { Project } from "./Projects";

export function ProjectCard({ title, description, repoUrl }: Project) {
  return (
    <Box w="300px" mt={4}>
      <Heading as="h4" size="sm">
        {title}
      </Heading>
      <Text>{description}</Text>
      <Link
        href={repoUrl}
        target="_blank"
        aria-label="GitHub"
        display="inline-flex"
        alignItems="center"
        color={"blue.500"}
      >
        Repo link
        <Text as="span" ml={2}>
          <FaExternalLinkAlt />
        </Text>
      </Link>
    </Box>
  );
}
