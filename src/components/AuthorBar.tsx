import Link from '@/components/ui/Link';
import { Button } from './ui/button';
import Image from './ui/Image';

type AuthorBarProps = {
  name: string;
  image?: string;
  link?: string;
};

const AuthorBar = ({ name, image, link }: AuthorBarProps) => {
  return (
    <div className='flex items-center gap-3'>
      {image && (
        <Image
          mode='external'
          className='rounded-full'
          src={image}
          alt={name}
          width={30}
          height={30}
        />
      )}
      <div className='text-sm'>
        Written by
        <Button className='px-1 text-sm' variant='link' asChild>
          <Link target='_blank' href={link || ''}>
            {name}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default AuthorBar;
