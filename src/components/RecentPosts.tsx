import { getRecentPosts } from '@/lib/post';
import { createPostLink } from '@/lib/utils';

import GridWrapper from './GridWrapper';
import PostPreview from './PostPreview';
import Heading from './ui/Heading';
import Link from '@/components/ui/Link';

const RecentPosts = () => {
  const posts = getRecentPosts(6);

  return (
    <div className='w-full'>
      <Heading
        classNames={{
          h1: 'text-2xl xs:text-3xl',
        }}
      >
        Recent Posts
      </Heading>

      <GridWrapper className='gap-y-16'>
        {posts.map((post, index) => (
          <Link href={`/blog${createPostLink(post)}`} key={post._id}>
            <PostPreview post={post} thumbnail={false} priority={index <= 2} />
          </Link>
        ))}
      </GridWrapper>
    </div>
  );
};

export default RecentPosts;
