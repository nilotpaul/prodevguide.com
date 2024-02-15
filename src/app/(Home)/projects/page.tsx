import { getRepos } from '@/lib/getRepos';

import Heading from '@/components/ui/Heading';
import ProjectsServer from './ProjectsServer';
import { Suspense } from 'react';

export const dynamic = 'force-static';

const ProjectsPage = () => {
  return (
    <div>
      <Heading>Projects</Heading>

      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
        <Suspense fallback='Loading...'>
          <ProjectsServer
            getData={async () => {
              const repos = await getRepos();
              return repos;
            }}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default ProjectsPage;
