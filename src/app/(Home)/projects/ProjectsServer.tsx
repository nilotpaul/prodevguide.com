import { Repo } from '@/types';

import ProjectCard from '@/components/ProjectCard';

type ProjectsServerProps = {
  getData: () => Promise<Repo[]>;
};

const ProjectsServer = async ({ getData }: ProjectsServerProps) => {
  const repos = await getData();

  if (!repos || repos?.length === 0) {
    return <p>No projects found.</p>;
  }

  return repos
    .sort((a, b) => Number(new Date(b.created_at)) - Number(new Date(a.created_at)))
    .map((repo) => (
      <ProjectCard
        key={repo.id}
        project={{
          name: repo.name,
          description: repo.description,
          html_url: repo.html_url,
          updated_at: repo.updated_at,
        }}
      />
    ));
};

export default ProjectsServer;
