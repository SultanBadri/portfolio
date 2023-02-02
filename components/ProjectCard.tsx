import { Box, Heading, Text, Link, Image } from "@chakra-ui/react";

import { FaExternalLinkAlt } from "react-icons/fa";

import { Project } from "./Projects";

export function ProjectCard({
  title,
  description,
  imageUrl,
  repoUrl,
}: Project) {
  return (
    <Box w="300px" mt={4}>
      <Image
        src={imageUrl}
        alt={description}
        h="150"
        w="250"
        rounded="md"
      ></Image>
      <Heading as="h4" size="sm">
        {title}
      </Heading>
      <Text>{description}</Text>
      <Link
        href={repoUrl}
        target="_blank"
        aria-label="GitHub"
        display="flex"
        alignItems="center"
        color={"blue.500"}
      >
        Repo link
        <Box ml={2}>
          <FaExternalLinkAlt />
        </Box>
      </Link>
    </Box>
  );
}
