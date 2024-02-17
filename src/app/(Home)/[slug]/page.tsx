import { getPage, getPages } from '@/lib/page';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';

import { Separator } from '@/components/ui/separator';
import Heading from '@/components/ui/Heading';
import MdxRenderer from '@/components/MdxRenderer';

export const dynamicParams = false;

export function generateStaticParams() {
  return getPages().map(({ slugAsParams }) => ({
    slug: slugAsParams,
  }));
}

type PageProps = {
  params: {
    slug: string;
  };
};

const Page = ({ params }: PageProps) => {
  const { slug } = params;

  const page = getPage(slug);

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

      <Separator className='w-full' />

      <MdxRenderer code={page.body.code} />
    </div>
  );
};

export default Page;
