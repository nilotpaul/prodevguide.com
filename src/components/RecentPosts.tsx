import { getRecentPosts } from '@/lib/post';
import { createPostLink } from '@/lib/utils';

import PostPreview from './PostPreview';
import Heading from './ui/Heading';
import Link from '@/components/ui/Link';

const RecentPosts = () => {
  const posts = getRecentPosts(4);

  return (
    <div className='w-full'>
      <Heading
        classNames={{
          h1: 'text-2xl xs:text-3xl pl-2.5',
        }}
      >
        Recent Posts
      </Heading>

      <div className='flex flex-col gap-y-12'>
        {posts.map((post, index) => (
          <Link href={`/blog${createPostLink(post)}`} key={post._id}>
            <PostPreview post={post} type='padded' thumbnail={false} priority={index <= 2} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
