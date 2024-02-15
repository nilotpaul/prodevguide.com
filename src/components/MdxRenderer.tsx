import { useMDXComponent } from 'next-contentlayer/hooks';

import Link from 'next/link';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

type MdxRendererProps = {
  code: string;
  className?: string;
};

const MdxRenderer = ({ code, className }: MdxRendererProps) => {
  const content = useMDXComponent(code)({
    components: {
      h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
      h2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
      h3: ({ children, ...props }) => <h3 {...props}>{children}</h3>,
      h4: ({ children, ...props }) => <h4 {...props}>{children}</h4>,
      h5: ({ children, ...props }) => <h5 {...props}>{children}</h5>,
      p: ({ children, ...props }) => <p {...props}>{children}</p>,
      a: ({ children, href }) => (
        <Button variant='link' className='px-0 text-primary' asChild>
          <Link href={href ?? ''}>{children}</Link>
        </Button>
      ),
      br: () => <br />,
    },
  });

  return (
    <article className={cn('prose prose-base dark:prose-invert prose-a:no-underline', className)}>
      {content}
    </article>
  );
};

export default MdxRenderer;
