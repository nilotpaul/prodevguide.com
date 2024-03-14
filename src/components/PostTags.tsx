import { cn } from '@/lib/utils';
import Link from '@/components/ui/Link';
import { Button } from './ui/button';

type PostTagsProps = {
  tags: string[];
  classNames?: {
    main?: string;
    tag?: string;
  };
  hrefs: string[];
};

const PostTags = ({ tags, hrefs, classNames }: PostTagsProps) => {
  return (
    <ul className={cn('my-4 flex flex-wrap items-center gap-9', classNames?.main)}>
      {tags.map((tag, index) => (
        <li className={cn(classNames?.tag)} key={tag}>
          <Link href={hrefs[index]}>
            <Button className='rounded-full px-6' variant='special'>
              {tag}
            </Button>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PostTags;
