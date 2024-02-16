import { cn } from '@/lib/utils';
import Link, { LinkProps } from 'next/link';

type BrandProps = {
  className?: string;
} & Omit<LinkProps, 'href'>;

const Brand = ({ className, ...props }: BrandProps) => {
  return (
    <h1>
      <Link
        {...props}
        href='/'
        className={cn('cursor-pointer text-sm font-bold xs:text-base', className)}
      >
        MyBlog.dev
      </Link>
    </h1>
  );
};

export default Brand;
