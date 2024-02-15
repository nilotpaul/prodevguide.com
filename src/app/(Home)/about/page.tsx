import { allPages } from '.contentlayer/generated';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';

import MdxRenderer from '@/components/MdxRenderer';
import { Separator } from '@/components/ui/separator';
import Heading from '@/components/ui/Heading';

const AboutPage = () => {
  const page = allPages.find((page) => page.slugAsParams === 'about');

  if (!page) return notFound();

  return (
    <div className='space-y-6'>
      <div className='space-y-2'>
        <Heading>{page.title}</Heading>

        <p className='text-lg font-semibold'>{page.description}</p>
        <p className='text-sm font-medium text-zinc-800 dark:text-zinc-400'>
          Last updated: {format(page.publishedAt, 'MMMM d, yyyy')}
        </p>
      </div>

      <Separator className='h-[0.5px] w-full bg-rose dark:bg-rose/50' />

      <MdxRenderer code={page.body.code} />
    </div>
  );
};

export default AboutPage;
