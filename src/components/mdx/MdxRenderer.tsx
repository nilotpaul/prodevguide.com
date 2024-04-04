import { useMDXComponent } from 'next-contentlayer/hooks';
import { ComponentProps } from 'react';

import Link from '@/components/ui/Link';
import Toc from '../Toc';
import MdxImage from './MdxImage';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import { cn } from '@/lib/utils';
import CopyCode from './CopyCode';

type MdxRendererProps = {
  code: string;
  className?: string;
  showToc?: boolean;
};

const MdxRenderer = ({ code, className, showToc = false }: MdxRendererProps) => {
  const Mdx = useMDXComponent(code);

  const components: NonNullable<(typeof Mdx)['defaultProps']>['components'] = {
    Image: ({ src, ...props }) => src?.length && <MdxImage src={src} {...props} />,
    h1: ({ children, ...props }) => (
      <h1 className='text-3xl xs:text-4xl' {...props}>
        {children}
      </h1>
    ),
    p: ({ children, ...props }) =>
      typeof children === 'string' ? <p {...props}>{children}</p> : children,
    a: ({ children, href, className }) => (
      <Link
        className={cn(
          'h-min p-0 text-primary underline',
          {
            'no-underline hover:underline': className?.match(/-h[1-3]$/),
          },
          className
        )}
        href={href || ''}
      >
        {children}
      </Link>
    ),
    Link: ({
      children,
      href,
      className,
      referrerPolicy,
      ...props
    }: ComponentProps<typeof Link>) => (
      <Link
        className={cn(
          'h-min p-0 text-primary underline',
          {
            'no-underline hover:underline': className?.match(/-h[1-3]$/),
          },
          className
        )}
        href={href || ''}
        referrerPolicy={(props.target === '_blank' ? 'no-referrer' : undefined) || referrerPolicy}
        {...props}
      >
        {children}
      </Link>
    ),
    nav: ({ children, className, ...props }) =>
      className === 'toc' && showToc ? (
        <Toc toc={children} />
      ) : (
        <nav className={className} {...props}>
          {children}
        </nav>
      ),
    // @ts-ignore raw is there
    pre: ({
      children,
      raw,
      className,
      ...props
    }: JSX.IntrinsicElements['pre'] & { raw: string }) => (
      <pre className={cn(className)} {...props}>
        <CopyCode rawCode={raw} />
        {children}
      </pre>
    ),
    figure: ({ className, children, ...props }) => (
      <figure className={cn('relative', className)} {...props}>
        {children}
      </figure>
    ),
    Table,
    TableCaption,
    TableHeader,
    TableRow,
    TableHead: ({ className, children, ...props }: ComponentProps<typeof TableHead>) => (
      <TableHead className={cn('font-bold text-black dark:text-white', className)} {...props}>
        {children}
      </TableHead>
    ),
    TableBody,
    TableCell,
    TableFooter,
  };

  return (
    <article
      className={cn(
        'prose prose-base z-50 min-w-full dark:prose-invert prose-code:rounded-sm prose-code:p-[1.5px] prose-code:px-1 prose-code:before:hidden prose-code:after:hidden',
        className
      )}
    >
      <Mdx components={components} />
    </article>
  );
};

export default MdxRenderer;
