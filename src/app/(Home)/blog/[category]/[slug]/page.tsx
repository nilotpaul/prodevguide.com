import { getAuthorByName } from '@/lib/author';
import { getPosts, getPublishedPost } from '@/lib/post';
import { notFound } from 'next/navigation';
import { Categories } from '@/config';
import getUrl, { createPostLink, getAssets } from '@/lib/utils';
import { format } from 'date-fns';
import { constructMetadata } from '@/lib/metadata';
import { TWITTER_HANDLE } from '@/config/site';

import { Separator } from '@/components/ui/separator';
import AuthorBar from '@/components/AuthorBar';
import MdxRenderer from '@/components/mdx/MdxRenderer';
import PostThumbnail from '@/components/PostThumbnail';
import Heading from '@/components/ui/Heading';
import SharePost from '@/components/SharePost';

export function generateMetadata({ params }: PostPageProps) {
  const post = getPublishedPost(params);

  if (!post) return constructMetadata({ notFound: true });

  return constructMetadata({
    title: post.title,
    description: post.description,
    image: getAssets(post.thumbnail),
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

  return (
    <>
      <Heading
        classNames={{
          h1: 'mb-6 text-4xl font-bold xs:mb-8',
          separator: 'hidden',
        }}
      >
        {post.title}
      </Heading>
      <div className='flex flex-col gap-2'>
        <p className='py-2 text-sm font-semibold leading-8 md:text-base'>{post.description}</p>
        <p className='pb-4 pt-2 text-sm font-medium'>
          {format(post.publishedDate, 'MMM dd, yyyy')} - {post.readingTime} min read
        </p>

        <AuthorBar name={author.name} image={author.image} link={author.link} />
      </div>

      <Separator className='my-2 w-full' />
      <div className='relative min-w-full space-y-16'>
        <PostThumbnail image={post.thumbnail} alt={post.title} />

        <MdxRenderer showToc code={post.body.code} />
      </div>

      <Separator className='my-10 mb-4 w-full' />

      <SharePost
        url={getUrl(`/blog${createPostLink(post)}`)}
        text={`${post.title} by ${TWITTER_HANDLE}`}
      />
    </>
  );
};

export default PostPage;
