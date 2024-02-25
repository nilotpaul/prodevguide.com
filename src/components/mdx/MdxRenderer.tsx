import { useMDXComponent } from 'next-contentlayer/hooks';

import Link from '@/components/ui/Link';
import Toc from '../Toc';
import MdxImage from './MdxImage';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

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
      <Button variant='link' className={cn('h-min p-0 text-primary', className)} asChild>
        <Link href={href || ''}>{children}</Link>
      </Button>
    ),
    nav: ({ children, className, ...props }) =>
      className === 'toc' && showToc ? (
        <Toc toc={children} />
      ) : (
        <nav className={className} {...props}>
          {children}
        </nav>
      ),
  };
  return (
    <article
      className={cn(
        'prose prose-base z-50 min-w-full dark:prose-invert prose-a:no-underline',
        className
      )}
    >
      <Mdx components={components} />
    </article>
  );
};

export default MdxRenderer;
