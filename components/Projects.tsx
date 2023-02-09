import { Flex } from "@chakra-ui/react";

import { ProjectCard } from "./ProjectCard";

export type Project = {
  title: string;
  description: string;
  imageUrl: string;
  repoUrl: string;
};

export function Projects({ projects }: { projects: Project[] }) {
  return (
    <Flex wrap="wrap">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </Flex>
  );
}
