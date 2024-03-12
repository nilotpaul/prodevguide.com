'use client';

import { useTheme } from 'next-themes';
import { useMounted } from '@/hooks/useMounted';

import { Button } from './ui/button';
import { Skeleton } from './ui/skeleton';
import { cn } from '@/lib/utils';
import { Icons } from './Icons';

type ThemeToggleProps = {
  className?: string;
};

const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const { setTheme, theme } = useTheme();

  const isMounted = useMounted();

  if (!isMounted) {
    return (
      <Button
        aria-disabled='true'
        size='icon'
        variant='ghost'
        className='hidden h-8 w-8 sm:inline-flex'
      >
        <Skeleton className='h-5 w-5 rounded-full xs:h-6 xs:w-6' />
      </Button>
    );
  }

  return (
    <Button
      aria-label='Theme Toggle'
      size='icon'
      variant='ghost'
      className={cn('h-8 w-8 hover:bg-transparent sm:hover:bg-accent', className)}
      onClick={() => {
        if (theme === 'dark') {
          setTheme('light');
        } else {
          setTheme('dark');
        }
      }}
    >
      {theme === 'dark' ? (
        <Icons.sun className='h-5 w-5 text-yellow-500 xs:h-6 xs:w-6 sm:h-5 sm:w-5' />
      ) : (
        <Icons.moon className='h-5 w-5 xs:h-6 xs:w-6 sm:h-5 sm:w-5' />
      )}
    </Button>
  );
};

export default ThemeToggle;
