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
      {projects.map((project, i) => (
        <ProjectCard key={i} {...project} />
      ))}
    </Flex>
  );
}
