import { heading } from '@/config/fonts';
import { Separator } from './separator';
import { cn } from '@/lib/utils';

type HeadingProps = {
  classNames?: {
    h1?: string;
    separator?: string;
  };
} & Omit<JSX.IntrinsicElements['h1'], 'className'>;

const Heading = ({ classNames, children, ...props }: HeadingProps) => {
  return (
    <h1
      {...props}
      className={cn(
        'font-headings mb-8 w-fit text-3xl font-bold xs:text-4xl',
        classNames?.h1,
        heading.className
      )}
    >
      {children}
      <Separator className={cn('mt-1.5 h-[2.5px] bg-rose dark:bg-rose', classNames?.separator)} />
    </h1>
  );
};

export default Heading;
