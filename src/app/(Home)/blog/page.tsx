import { Categories } from '@/config';
import { getPosts } from '@/lib/post';
import { createPostLink } from '@/lib/utils';

import { Separator } from '@/components/ui/separator';
import PostPreview from '@/components/PostPreview';
import GridWrapper from '@/components/GridWrapper';
import Link from 'next/link';
import Heading from '@/components/ui/Heading';

export const dynamicParams = false;

const BlogPage = () => {
  const posts = Categories.map(({ name }) => {
    const publishedPosts = getPosts(name);

    return {
      category: name,
      publishedPosts: publishedPosts.slice(0, 6),
    };
  });

  return (
    <>
      {posts
        .filter(({ publishedPosts }) => publishedPosts.length !== 0)
        .map((item) => (
          <section className='my-12' key={item.category}>
            <Heading className='mb-9 w-fit'>
              {item.category}

              <Separator className='mt-1.5 h-1 bg-rose dark:bg-rose' />
            </Heading>

            <GridWrapper>
              {item.publishedPosts.map((post) => (
                <Link href={`/blog${createPostLink(post)}`} key={post._id}>
                  <PostPreview post={post} />
                </Link>
              ))}
            </GridWrapper>
          </section>
        ))}
    </>
  );
};

export default BlogPage;
