import { Categories } from '@/config';
import { getPosts } from '@/lib/post';

import { Separator } from '@/components/ui/separator';
import PostPreview from '@/components/PostPreview';
import GridWrapper from '@/components/GridWrapper';
import Link from 'next/link';

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
            <h1 className='mb-9 w-fit font-bold'>
              {item.category}

              <Separator className='mt-1.5 bg-rose dark:bg-rose' />
            </h1>

            <GridWrapper>
              {item.publishedPosts.map((post) => (
                <Link
                  href={`/blog${post.slug.replace('/posts', `/${post.category.toLowerCase()}`)}`}
                  key={post._id}
                >
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
