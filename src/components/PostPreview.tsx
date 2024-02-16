import { Post } from '.contentlayer/generated';
import { calculateReadingTime } from '@/lib/utils';
import { format } from 'date-fns';

import Image from 'next/image';
import { CalendarIcon } from '@radix-ui/react-icons';
import { AspectRatio } from './ui/aspect-ratio';

type PostPreviewProps = {
  post: Post;
};

const PostPreview = ({ post }: PostPreviewProps) => {
  const readingTime = calculateReadingTime(post.body.raw);

  return (
    <article className='flex cursor-pointer flex-col transition duration-300 hover:scale-[1.02]'>
      <AspectRatio ratio={3 / 1} className='relative'>
        <Image
          src={post.thumbnail}
          alt={post.title}
          fill
          className='h-full w-full rounded-md object-fill'
        />
      </AspectRatio>

      <h2 className='mt-3 text-xl font-bold'>{post.title}</h2>
      <p
        className='inline-flex gap-x-1.5 py-2 text-xs font-medium
      text-zinc-700 dark:text-zinc-400'
      >
        <CalendarIcon />
        <span className='space-x-2'>
          <span>{format(post.publishedDate, 'MMM, dd, yyyy')}</span>
          <span>|</span>
          <span>{readingTime} min read</span>
        </span>
      </p>
    </article>
  );
};

export default PostPreview;
