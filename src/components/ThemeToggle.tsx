'use client';

import { useTheme } from 'next-themes';
import { useMounted } from '@/hooks/useMounted';

import { Button } from './ui/button';
import { Sun } from 'lucide-react';
import { MoonIcon } from '@radix-ui/react-icons';
import { Skeleton } from './ui/skeleton';
import { cn } from '@/lib/utils';

type ThemeToggleProps = {
  className?: string;
};

const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const { setTheme, theme } = useTheme();

  const isMounted = useMounted();

  if (!isMounted) {
    return (
      <Button size='icon' variant='ghost' className='hidden h-8 w-8 sm:inline-flex'>
        <Skeleton className='xs:w-6 xs:h-6 h-5 w-5 rounded-full' />
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
        <Sun className='xs:w-6 xs:h-6 h-5 w-5 text-yellow-500 sm:h-5 sm:w-5' />
      ) : (
        <MoonIcon className='xs:w-6 xs:h-6 h-5 w-5 sm:h-5 sm:w-5' />
      )}
    </Button>
  );
};

export default ThemeToggle;
