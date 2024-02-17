import { cn } from '@/lib/utils';

type HeadingProps = JSX.IntrinsicElements['h1'];

const Heading = ({ className, children, ...props }: HeadingProps) => {
  return (
    <h1 {...props} className={cn('mb-8 w-fit text-3xl font-bold xs:text-4xl', className)}>
      {children}
    </h1>
  );
};

export default Heading;
