import { Box, Heading, Text, Flex, Link, Image } from "@chakra-ui/react";

import { FaExternalLinkAlt } from "react-icons/fa";

import { Project } from "./Projects";

export function ProjectCard({ title, description, image, url }: Project) {
  return (
    <Box>
      <Image src={image} alt={description}></Image>
      <Heading as="h4" size="sm">
        {title}
      </Heading>
      <Text>{description}</Text>
      <Link href={url} target="_blank" aria-label="GitHub">
        <Text>
          Repo link
          <FaExternalLinkAlt />
        </Text>
      </Link>
    </Box>
  );
}
