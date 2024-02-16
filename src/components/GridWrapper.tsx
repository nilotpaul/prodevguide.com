import { cn } from '@/lib/utils';

type GridWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const GridWrapper = ({ children, className }: GridWrapperProps) => {
  return <div className={cn('grid grid-cols-2 gap-x-16 gap-y-10', className)}>{children}</div>;
};

export default GridWrapper;
