import { SITE_NAME } from '@/config/site';
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
      {SITE_NAME}
    </Link>
  );
};

export default Brand;
