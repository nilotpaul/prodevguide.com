import { notFound } from 'next/navigation';
import { getPosts } from '@/lib/post';

import { Separator } from '@/components/ui/separator';
import PostPreview from '@/components/PostPreview';
import GridWrapper from '@/components/GridWrapper';
import Link from 'next/link';

export const dynamic = 'force-static';

type pageProps = {
  params: {
    category: string;
  };
};

const page = ({ params }: pageProps) => {
  const { category } = params;

  const posts = getPosts(category).slice(0, 8);

  if (!posts || posts.length === 0) return notFound();

  return (
    <div className='space-y-9'>
      <h1 className='w-fit font-bold'>
        {posts[0].category} <Separator className='mt-1.5 bg-rose dark:bg-rose' />
      </h1>

      <GridWrapper>
        {posts.map((post) => (
          <Link
            href={`/blog${post.slug.replace('/posts', `/${post.category.toLowerCase()}`)}`}
            key={post._id}
          >
            <PostPreview post={post} />
          </Link>
        ))}
      </GridWrapper>
    </div>
  );
};

export default page;
