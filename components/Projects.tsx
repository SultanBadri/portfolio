import { ProjectCard } from "./ProjectCard";

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
};

export function Projects({ projects }: { projects: Project[] }) {
  return (
    <>
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </>
  );
}
