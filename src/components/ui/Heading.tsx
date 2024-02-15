import { cn } from '@/lib/utils';

type HeadingProps = JSX.IntrinsicElements['h1'];

const Heading = ({ className, children, ...props }: HeadingProps) => {
  return (
    <h1 {...props} className={cn('mb-8 w-fit text-4xl font-bold', className)}>
      {children}
    </h1>
  );
};

export default Heading;
