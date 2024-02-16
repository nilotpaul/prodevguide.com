import { getRecentPosts } from '@/lib/post';
import { createPostLink } from '@/lib/utils';

import GridWrapper from './GridWrapper';
import PostPreview from './PostPreview';
import Heading from './ui/Heading';
import Link from 'next/link';

const RecentPosts = () => {
  const posts = getRecentPosts(6);

  return (
    <div className='w-full'>
      <Heading className='text-3xl'>Recent Posts</Heading>

      <GridWrapper className='gap-y-16'>
        {posts.map((post) => (
          <Link href={`/blog${createPostLink(post)}`} key={post._id}>
            <PostPreview post={post} />
          </Link>
        ))}
      </GridWrapper>
    </div>
  );
};

export default RecentPosts;
