import { ComponentProps } from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';

import Link from '@/components/ui/Link';
import Toc from './Toc';
import Image from './ui/Image';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

type MdxRendererProps = {
  code: string;
  className?: string;
  showToc?: boolean;
};

const MdxRenderer = ({ code, className, showToc = false }: MdxRendererProps) => {
  const content = useMDXComponent(code)({
    components: {
      h1: ({ children, ...props }) => (
        <h1 className='text-3xl xs:text-4xl' {...props}>
          {children}
        </h1>
      ),
      h2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
      h3: ({ children, ...props }) => <h3 {...props}>{children}</h3>,
      p: ({ children, ...props }) =>
        typeof children === 'string' ? <p {...props}>{children}</p> : children,
      a: ({ children, href, className }) => (
        <Button variant='link' className={cn('h-min p-0 text-primary', className)} asChild>
          <Link href={href || ''}>{children}</Link>
        </Button>
      ),
      Image: ({
        src,
        height,
        width,
        alt,
        className,
        mode = 'local',
        ...props
      }: ComponentProps<typeof Image>) => (
        <Image
          src={src}
          height={height}
          width={width}
          mode={mode}
          alt={alt ?? 'Post Image'}
          className={cn(
            'my-8 h-full w-full rounded-md object-fill shadow-lg shadow-zinc-400 dark:shadow-zinc-900',
            className
          )}
          {...props}
        />
      ),
      br: () => <br />,
      nav: ({ children, className, ...props }) =>
        className === 'toc' && showToc ? (
          <Toc toc={children} />
        ) : (
          <nav {...props} className={className}>
            {children}
          </nav>
        ),
    },
  });

  return (
    <article
      className={cn(
        'prose prose-base z-50 min-w-full dark:prose-invert prose-a:no-underline',
        className
      )}
    >
      {content}
    </article>
  );
};

export default MdxRenderer;
