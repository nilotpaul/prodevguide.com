import { Categories } from '@/config';
import { getPosts } from '@/lib/post';
import { createPostLink } from '@/lib/utils';
import { constructMetadata } from '@/lib/metadata';

import PostPreview from '@/components/PostPreview';
import GridWrapper from '@/components/GridWrapper';
import Link from '@/components/ui/Link';
import Heading from '@/components/ui/Heading';

export const metadata = constructMetadata({
  title: 'Blog',
  description: 'Collection of blog posts from all categories',
});

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
            <Heading classNames={{ h1: 'mb-9 w-fit' }}>{item.category}</Heading>

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
