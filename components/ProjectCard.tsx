import { Box, Heading, Text, Button, Link, Image } from "@chakra-ui/react";

import { FaExternalLinkAlt } from "react-icons/fa";

import { Project } from "./Projects";

export function ProjectCard({ title, description, image, url }: Project) {
  return (
    <Box>
      <Image
        src={image}
        alt={description}
        htmlHeight="150"
        htmlWidth="250"
        rounded="md"
      ></Image>
      <Heading as="h4" size="sm">
        {title}
      </Heading>
      <Text>{description}</Text>
      <Button>
        <Link
          href={url}
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
      </Button>
    </Box>
  );
}
