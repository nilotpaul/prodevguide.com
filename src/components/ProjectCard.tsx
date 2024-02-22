import { Repo } from '@/types';
import { format } from 'date-fns';

import Link from '@/components/ui/Link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';

type ProjectCardProps = {
  project: Pick<Repo, 'name' | 'html_url' | 'description' | 'updated_at'>;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className='border-[1px] border-zinc-400 bg-transparent transition-colors duration-300 hover:border-rose dark:border-zinc-800 hover:dark:border-rose'>
      <Link target='_blank' href={project.html_url}>
        <CardHeader>
          <CardTitle className='line-clamp-2 font-bold capitalize'>
            {project.name.replaceAll('-', ' ')}
          </CardTitle>
        </CardHeader>

        <CardContent className='font-semibold'>{project.description}</CardContent>

        <CardFooter className='text-sm font-medium text-zinc-800 dark:text-zinc-400'>
          Updated: {format(project.updated_at, 'dd, MMM, yy')}
        </CardFooter>
      </Link>
    </Card>
  );
};

export default ProjectCard;
