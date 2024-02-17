'use client';

import { NAV_MENU } from '@/config';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

import { Button } from './ui/button';
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import Brand from './Brand';
import ThemeToggle from './ThemeToggle';
import Link from 'next/link';
import Container from './ui/Container';
import HeaderHoverCard from './HeaderHoverCard';
import HeaderCardMobile from './HeaderCardMobile';
import { ArrowDownIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        'sticky left-0 top-0 z-40 h-16 w-full border-b-[1px] border-slate-400 backdrop-blur-md dark:border-slate-800'
      )}
    >
      <Container className='flex h-full items-center justify-between'>
        <Brand />

        <ul className='hidden items-center gap-1.5 sm:flex md:gap-4'>
          {NAV_MENU.map((item) => {
            const isActive = pathname === item.path;
            const blog = item.path === '/blog';

            if (blog) {
              return (
                <li key={item.path}>
                  <HeaderHoverCard>
                    <Button
                      variant='link'
                      size='sm'
                      className={cn({
                        'text-blue-500 underline': isActive,
                      })}
                      asChild
                    >
                      <Link className='flex items-center gap-2' href={item.path} key={item.path}>
                        {item.name}
                        <ChevronDown className='h-3.5 w-3.5' />
                      </Link>
                    </Button>
                  </HeaderHoverCard>
                </li>
              );
            }

            return (
              <li key={item.path}>
                <Button
                  variant='link'
                  size='sm'
                  className={cn({
                    'text-blue-500 underline': isActive,
                  })}
                  asChild
                >
                  <Link href={item.path} key={item.path}>
                    {item.name}
                  </Link>
                </Button>
              </li>
            );
          })}
        </ul>

        {/* menu toggle */}
        <div className='flex items-center gap-4 xs:gap-6 sm:hidden'>
          <ThemeToggle className='ml-2 h-5 w-5 xs:h-6 xs:w-6 sm:h-5 sm:w-5' />
          {!isOpen ? (
            <HamburgerMenuIcon
              aria-label='Menu Open'
              onClick={() => setIsOpen(true)}
              className='h-5 w-5 xs:h-6 xs:w-6 sm:h-5 sm:w-5'
            />
          ) : (
            <Cross1Icon
              aria-label='Menu Close'
              onClick={() => setIsOpen(false)}
              className='h-5 w-5 xs:h-6 xs:w-6 sm:h-5 sm:w-5'
            />
          )}
        </div>
        {/* mobile nav menu */}
        <div
          aria-disabled='true'
          className={cn(
            'absolute -left-[1000rem] top-0 -z-20 min-h-screen w-full bg-zinc-300 backdrop-blur-xl transition-all duration-300 dark:bg-gray-950 sm:hidden',
            {
              'left-0': isOpen,
            }
          )}
        />
        <ul
          className={cn(
            'absolute -left-[1000rem] top-16 z-50 mt-4 min-h-[calc(100vh-6rem)] w-full flex-col gap-1 transition-all duration-300 xs:gap-4 sm:hidden',
            {
              'left-0 flex': isOpen,
            }
          )}
        >
          {NAV_MENU.map((item) => {
            const isActive = pathname.toLowerCase() === item.path.toLowerCase();
            const blog = item.path === '/blog';

            if (blog) {
              return (
                <HeaderCardMobile onClick={() => setIsOpen(false)} key={item.path}>
                  <li className='px-3'>
                    <Button
                      variant='link'
                      size='sm'
                      className={cn('text-lg xs:text-xl sm:text-base', {
                        'text-blue-500 underline': isActive,
                      })}
                      onClick={() => setIsOpen(false)}
                      asChild
                    >
                      <Link href={item.path} key={item.path}>
                        {item.name}
                      </Link>
                    </Button>
                  </li>
                </HeaderCardMobile>
              );
            }

            return (
              <li key={item.path} className='px-3'>
                <Button
                  variant='link'
                  size='sm'
                  className={cn('text-lg xs:text-xl sm:text-base', {
                    'text-blue-500 underline': isActive,
                  })}
                  onClick={() => setIsOpen(false)}
                  asChild
                >
                  <Link href={item.path} key={item.path}>
                    {item.name}
                  </Link>
                </Button>
              </li>
            );
          })}
        </ul>

        <ThemeToggle className='hidden sm:inline-flex' />
      </Container>
    </nav>
  );
};

export default Header;
