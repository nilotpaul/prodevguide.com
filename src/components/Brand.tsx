import Link, { LinkProps } from 'next/link';

import { cn } from '@/lib/utils';

type BrandProps = {
  className?: string;
} & Omit<LinkProps, 'href'>;

const Brand = ({ className, ...props }: BrandProps) => {
  return (
    <Link
      {...props}
      href='/'
      className={cn('cursor-pointer text-sm font-bold xs:text-base', className)}
    >
      <span className='bg-gradient-to-r from-rose to-[#006FEE] bg-clip-text text-transparent'>
        ProDev
      </span>{' '}
      <span className='text-zinc-800 dark:text-zinc-200'>Guide</span>
    </Link>
  );
};

export default Brand;
