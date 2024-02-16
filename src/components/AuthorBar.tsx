import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

type AuthorBarProps = {
  name: string;
  image?: string;
  link?: string;
};

const AuthorBar = ({ name, image, link }: AuthorBarProps) => {
  return (
    <div className='flex w-full flex-col justify-between gap-6 sm:flex-row sm:items-center sm:gap-0'>
      <div className='flex items-center gap-3'>
        {image && <Image className='rounded-full' src={image} alt={name} width={30} height={30} />}
        <div className='text-base xs:text-base sm:text-base'>
          written by
          <Button className='px-1 text-base xs:text-base sm:text-base' variant='link' asChild>
            <Link target='_blank' href={link || ''}>
              {name}
            </Link>
          </Button>
        </div>
      </div>
      socials
    </div>
  );
};

export default AuthorBar;
