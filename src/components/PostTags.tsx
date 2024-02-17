import { cn } from '@/lib/utils';
import Link from 'next/link';

type PostTagsProps = {
  tags: string[];
  classNames?: {
    main?: string;
    tag?: string;
  };
  hrefs?: string[];
};

const PostTags = ({ tags, hrefs, classNames }: PostTagsProps) => {
  return (
    <ul className={cn('my-4 flex items-center gap-3', classNames?.main)}>
      {tags.map((tag, index) => (
        <li
          className={cn(
            'inline-flex h-6 w-11 items-center justify-center rounded-full bg-zinc-400 text-xs dark:bg-zinc-900',
            classNames?.tag
          )}
          key={tag}
        >
          {hrefs && hrefs?.length !== 0 ? <Link href={hrefs[index]}>{tag}</Link> : tag}
        </li>
      ))}
    </ul>
  );
};

export default PostTags;
