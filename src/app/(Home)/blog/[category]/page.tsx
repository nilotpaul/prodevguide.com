import { notFound } from 'next/navigation';
import { getPosts } from '@/lib/post';
import { createPostLink } from '@/lib/utils';
import { Categories } from '@/config';

import { Separator } from '@/components/ui/separator';
import PostPreview from '@/components/PostPreview';
import GridWrapper from '@/components/GridWrapper';
import Link from 'next/link';
import Heading from '@/components/ui/Heading';

export function generateStaticParams() {
  return Categories.map(({ path }) => ({
    category: path.replace('/', ''),
  }));
}

type CategoryPageProps = {
  params: {
    category: string;
  };
};

const CategoryPage = ({ params }: CategoryPageProps) => {
  const { category } = params;

  const posts = getPosts(category).slice(0, 8);

  if (!posts || posts.length === 0) return notFound();

  return (
    <div className='space-y-9'>
      <Heading className='w-fit'>
        {posts[0].category} <Separator className='mt-1.5 h-1 bg-rose dark:bg-rose' />
      </Heading>

      <GridWrapper>
        {posts.map((post) => (
          <Link href={`/blog${createPostLink(post)}`} key={post._id}>
            <PostPreview post={post} />
          </Link>
        ))}
      </GridWrapper>
    </div>
  );
};

export default CategoryPage;
