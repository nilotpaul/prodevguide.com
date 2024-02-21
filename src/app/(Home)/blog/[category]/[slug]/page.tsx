import { getAuthorByName } from '@/lib/author';
import { getPosts, getPublishedPost } from '@/lib/post';
import { calculateReadingTime } from '@/lib/utils';
import { notFound } from 'next/navigation';
import { Categories } from '@/config';
import { format } from 'date-fns';

import { Separator } from '@/components/ui/separator';
import AuthorBar from '@/components/AuthorBar';
import MdxRenderer from '@/components/MdxRenderer';
import PostThumbnail from '@/components/PostThumbnail';
import { constructMetadata } from '@/lib/metadata';

export function generateMetadata({ params }: PostPageProps) {
  const post = getPublishedPost(params);

  if (!post) return constructMetadata({ notFound: true });

  return constructMetadata({
    title: post.title,
    description: post.description,
    image: post.thumbnail,
  });
}

export function generateStaticParams() {
  const posts = Categories.map(({ path }) => {
    const category = path.replace('/', '');
    const posts = getPosts(category);

    return posts.map(({ slugAsParams }) => ({
      category,
      slug: slugAsParams,
    }));
  });

  return posts.flat();
}

type PostPageProps = {
  params: {
    category: string;
    slug: string;
  };
};

const PostPage = ({ params }: PostPageProps) => {
  const post = getPublishedPost(params);
  const author = getAuthorByName(post?.authors[0] ?? '');

  if (!post || !author) return notFound();

  const readingTime = calculateReadingTime(post.body.raw);

  return (
    <div className='space-y-2'>
      <h1 className='mb-6 text-4xl font-bold xs:mb-8'>{post.title}</h1>
      <p className='py-2 text-sm font-semibold leading-8 md:text-base'>{post.description}</p>

      <p className='pb-4 pt-2 text-sm font-medium'>
        {format(post.publishedDate, 'MMM dd, yyyy')} - {readingTime} min read
      </p>

      <AuthorBar name={author.name} image={author.image} link={author.link} />

      <Separator className='w-full' />

      <div className='relative min-w-full space-y-16'>
        <PostThumbnail image={post.thumbnail} alt={post.title} />

        <MdxRenderer showToc code={post.body.code} />
      </div>
    </div>
  );
};

export default PostPage;
