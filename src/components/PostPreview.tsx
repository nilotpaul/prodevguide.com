import { Post } from '.contentlayer/generated';
import { format } from 'date-fns';

import { CalendarIcon, ClockIcon } from '@radix-ui/react-icons';
import { AspectRatio } from './ui/aspect-ratio';
import Image from './ui/Image';
import { cn } from '@/lib/utils';

type PostPreviewProps = {
  post: Post;
  priority?: boolean;
  thumbnail?: boolean;
  type?: 'default' | 'padded';
};

const PostPreview = ({
  post,
  thumbnail = true,
  priority = false,
  type = 'default',
}: PostPreviewProps) => {
  return (
    <article
      className={cn(
        'group flex cursor-pointer flex-col transition duration-300 hover:scale-[1.02]',
        {
          'rounded-sm p-3 hover:bg-gray-900': type === 'padded',
        }
      )}
    >
      {thumbnail && (
        <AspectRatio ratio={3 / 1} className='relative'>
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            priority={priority}
            blur
            className='h-full w-full rounded-md object-fill'
          />
        </AspectRatio>
      )}

      <h2
        className={cn(
          'my-2 mt-4 text-xl font-bold transition-colors group-hover:text-rose xs:text-2xl sm:text-xl',
          {
            'mt-0': type === 'padded',
          }
        )}
      >
        {post.title}
      </h2>
      <p
        className='inline-flex gap-x-1.5 py-2 text-xs font-medium
        text-zinc-700 dark:text-zinc-400'
      >
        <CalendarIcon />
        <span className='flex space-x-2'>
          <span>{format(post.publishedDate, 'MMM, dd, yyyy')}</span>
          <span>|</span>
          <span className='flex gap-x-1.5'>
            <ClockIcon /> {post.readingTime} min read
          </span>
        </span>
      </p>

      <div className='my-4 mb-6 space-x-3'>
        {post.tags?.map((tag) => (
          <span key={tag} className='rounded-full bg-zinc-400 px-2.5 py-1 text-xs dark:bg-zinc-900'>
            {tag}
          </span>
        ))}
      </div>

      <p className='line-clamp-2 text-sm text-zinc-700 dark:text-zinc-400'>{post.description}</p>
    </article>
  );
};

export default PostPreview;
