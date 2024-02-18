import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from './ui/button';

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
    <ul className={cn('my-4 flex items-center gap-9', classNames?.main)}>
      {tags.map((tag, index) => (
        <li className={cn(classNames?.tag)} key={tag}>
          {hrefs && hrefs?.length !== 0 ? (
            <Button className='rounded-full px-6' variant='special'>
              {' '}
              <Link href={hrefs[index]}>{tag}</Link>
            </Button>
          ) : (
            tag
          )}
        </li>
      ))}
    </ul>
  );
};

export default PostTags;
